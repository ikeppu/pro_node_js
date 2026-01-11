// We can pass inputs values to JS code
// requires Imports
// const core = require('@actions/core')
// const github = require('@actions/github')
// const exec = require('@actions/exec')

function run() {
  // Take inputs from actions file
  console.log(
    "core.getInput('name_of_input_from_action_file', {required: true})"
  );

  // Upload files to s3 with aws.sdk

  // Or use exec command

  console.log("exec.exec('aws s3 sync <local-folder> <s3-bucket>')");

  console.log("Hello from my custom javascript action");
}

run();
