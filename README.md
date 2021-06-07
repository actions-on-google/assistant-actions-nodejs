# Actions API Node.js Client Library

This library provides an easy way to call the Actions API. The library wraps the [Actions API](https://developers.google.com/assistant/actions/api/reference/rest).

## Quickstart

### Installing the client library

```bash
npm install @assistant/actions
```

### Using the client library

The code below makes a call to the [sendInteraction](https://developers.google.com/assistant/actions/api/reference/rest/v2/projects/sendInteraction) endpoint to play one round of conversation of a user's Action, using the provided query text:

```javascript
import {ActionsTestingClient} from '@assistant/actions';

/**
 * Make request to Actions API to send a query to an Action for the
 * given project ID.
 */
async function sendInteraction(projectId = 'your-project-id', queryText = 'example query text') {
  const request = {
    parent: `projects/${projectId}`,
    input: {query: queryText}
  };
  // Create client
  const actionsTestingClient = new ActionsTestingClient();
  // Send request to sendInteraction endpoint to play one round of conversation
  const res = await actionsTestingClient.sendInteraction(request);
  return res[0];
}
```

The code below makes a call to the [writePreview](https://developers.google.com/assistant/actions/api/reference/rest/v2/projects.preview/write) endpoint to updates a user's project preview from draft:

```javascript
import {ActionsSdkClient} from '@assistant/actions';

/**
 * Make request to Actions API to write preview from draft for the
 * given project ID.
 */
async function writePreviewFromDraft(projectId = 'your-project-id') {
  // Create request payload
  const request = {
    parent: `projects/${projectId}`,
    previewSettings: {sandbox: {value: true}},
    draft: {}
  };
  const [responsePromise, responseCallback] = getStreamResponsePromise();
  // Create client
  const actionsSdkClient = new ActionsSdkClient();
  // Send write preview request to stream endpoint
  const writePreviewStream = actionsSdkClient.writePreview(responseCallback);
  writePreviewStream.write(request);
  writePreviewStream.end();
  return await responsePromise;
}

/** Gets a resonse promise and callback for a stream request. */
function getStreamResponsePromise() {
  let writeSuccess: any, writeFailure: any;
  const responsePromise = new Promise((resolve, reject) => {
    writeSuccess = resolve;
    writeFailure = reject;
  });
  const responseCallback = (err: any, resp: any) => {
      !err ? writeSuccess(resp) : writeFailure(err);
  }
  return [responsePromise, responseCallback]
}
```

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google) or [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant).

## Make Contributions
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).
