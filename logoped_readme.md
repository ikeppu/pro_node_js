Для реализации этой схемы на твоем стеке (**NestJS + Angular + Cloudflare Stream**) тебе нужно выполнить 5 простых шагов. Основная логика — **защита видео**. Мы не даем прямую ссылку, а генерируем одноразовый билет (Signed URL).

---

### Шаг 1: Настройка в Cloudflare

1. Зайди в панель Cloudflare Stream.
2. Загрузи тестовое видео.
3. Найди **Video ID** (выглядит как длинный хеш).
4. В разделе **Settings** включи опцию **"Signed URLs only"**. Теперь видео нельзя посмотреть просто по ссылке.
5. Получи свой **API Token** и **Account ID** в настройках профиля.

---

### Шаг 2: NestJS — Эндпоинт для получения ссылки

Твой бэкенд будет выступать "охранником".

```typescript
// video.controller.ts
@Controller("video")
export class VideoController {
  @Get(":videoId/access")
  @UseGuards(AuthGuard) // Проверяем, что юзер залогинен
  async getVideoAccess(@Param("videoId") videoId: string, @Req() req) {
    // 1. Проверяем в БД, есть ли у юзера доступ к этому уроку
    // const hasAccess = await this.userService.checkAccess(req.user.id, videoId);
    // if (!hasAccess) throw new ForbiddenException();

    // 2. Запрашиваем Signed URL у Cloudflare
    const accountId = process.env.CF_ACCOUNT_ID;
    const apiToken = process.env.CF_API_TOKEN;

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${videoId}/token`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // Возвращаем токен фронтенду
    return { token: data.result.token };
  }
}
```

---

### Шаг 3: Angular — Компонент плеера

На фронте мы получаем токен и вставляем его в iframe или кастомный плеер.

```typescript
// video-player.component.ts
@Component({
  selector: "app-video-player",
  template: `
    <div class="video-container" *ngIf="videoUrl">
      <iframe
        [src]="videoUrl | safeUrl"
        style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen="true"
      >
      </iframe>
    </div>
  `,
})
export class VideoPlayerComponent {
  videoUrl: string;

  constructor(private videoService: VideoService) {}

  loadVideo(videoId: string) {
    this.videoService.getSignedToken(videoId).subscribe((res) => {
      // Формируем ссылку с токеном
      this.videoUrl = `https://customer-<ID>.cloudflarestream.com/${res.token}/iframe`;
    });
  }
}
```

_(Не забудь создать `SafeUrlPipe`, чтобы Angular не блокировал внешние ссылки)._

---

### Шаг 4: Безопасность (Senior Touch)

Чтобы ссылку не передали другу, добавь в NestJS ограничение по IP:
В тело запроса к Cloudflare (Шаг 2) добавь:

```json
body: JSON.stringify({
  accessRules: [
    {
      type: 'ip',
      ip: req.ip, // Токен будет работать только для этого IP
      action: 'allow'
    }
  ]
})

```

---

### Шаг 5: Организация уроков в БД

В твоей базе (PostgreSQL/MongoDB) храни не видео-файл, а только **Video ID**.

**Пример структуры таблицы `Lessons`:**

- `id`: UUID
- `title`: "Упражнение на звук Р"
- `description`: "Инструкция..."
- `cf_video_id`: "fc87922760... (ID из Cloudflare)"
- `order`: 1

---

### Итог по деньгам и времени:

- **Затраты:** $5/мес (минималка Cloudflare).
- **Время реализации:** 1 вечер на NestJS + Angular.
- **Результат:** Профессиональная защита уровня онлайн-школ.

Это отличный функционал для твоего стартапа. Юзер платит — получает доступ. Ты не платишь за пустой трафик.

**Хочешь, я помогу составить структуру БД (Prisma или TypeORM), чтобы правильно связать юзеров, курсы и видео-уроки?**

// Пользователи системы
model User {
id String @id @default(uuid())
email String @unique
fullName String?
role Role @default(USER) // USER или ADMIN (логопед)
enrollments Enrollment[] // На какие курсы подписан
progress Progress[] // Что уже посмотрел
createdAt DateTime @default(now())
}

enum Role {
USER
ADMIN
}

// Курсы (например, "Исправление звука Р", "Заикание у детей")
model Course {
id String @id @default(uuid())
title String
description String?
price Decimal @db.Decimal(10, 2)
lessons Lesson[] // Список уроков в курсе
enrollments Enrollment[]
}

// Уроки внутри курса
model Lesson {
id String @id @default(uuid())
title String
content String? // Текстовое описание или задание
cf_video_id String // ID видео из Cloudflare Stream
order Int // Порядок урока в списке
courseId String
course Course @relation(fields: [courseId], references: [id])
progress Progress[]
}

// Связующая таблица для покупок (кто купил какой курс)
model Enrollment {
id String @id @default(uuid())
userId String
courseId String
user User @relation(fields: [userId], references: [id])
course Course @relation(fields: [courseId], references: [id])
createdAt DateTime @default(now())

@@unique([userId, courseId]) // Чтобы нельзя было купить один курс дважды
}

// Прогресс обучения (какие уроки завершены)
model Progress {
id String @id @default(uuid())
userId String
lessonId String
completed Boolean @default(true)
user User @relation(fields: [userId], references: [id])
lesson Lesson @relation(fields: [lessonId], references: [id])
updatedAt DateTime @updatedAt

@@unique([userId, lessonId])
}

model User {
id String @id @default(uuid())
email String @unique
role Role @default(USER)
// Связь с подпиской
subscription Subscription?
progress Progress[]
createdAt DateTime @default(now())
}

model Subscription {
id String @id @default(uuid())
userId String @unique
user User @relation(fields: [userId], references: [id])
status SubscriptionStatus @default(INACTIVE)
planType PlanType @default(FREE)
startDate DateTime @default(now())
endDate DateTime // Дата окончания доступа
stripeId String? @unique // ID подписки в платежной системе
updatedAt DateTime @updatedAt
}

enum SubscriptionStatus {
ACTIVE
PAST_DUE
CANCELED
INACTIVE
}

enum PlanType {
FREE
MONTHLY
YEARLY
}
