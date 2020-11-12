// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as actionssdkModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubClientStreamingCall<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  if (error) {
    return sinon.stub().callsArgWith(2, error);
  }
  const transformStub = sinon.stub();
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  return sinon.stub().returns(mockStream).callsArgWith(2, null, response);
}

describe('v2.ActionsSdkClient', () => {
  it('has servicePath', () => {
    const servicePath = actionssdkModule.v2.ActionsSdkClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = actionssdkModule.v2.ActionsSdkClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = actionssdkModule.v2.ActionsSdkClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new actionssdkModule.v2.ActionsSdkClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new actionssdkModule.v2.ActionsSdkClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new actionssdkModule.v2.ActionsSdkClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.actionsSdkStub, undefined);
    await client.initialize();
    assert(client.actionsSdkStub);
  });

  it('has close method', () => {
    const client = new actionssdkModule.v2.ActionsSdkClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new actionssdkModule.v2.ActionsSdkClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new actionssdkModule.v2.ActionsSdkClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('writePreview', () => {
    it('invokes writePreview without error', async () => {
      const client = new actionssdkModule.v2.ActionsSdkClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.actions.sdk.v2.WritePreviewRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.actions.sdk.v2.Preview()
      );
      client.innerApiCalls.writePreview = stubClientStreamingCall(
        expectedResponse
      );
      let stream: PassThrough;
      const promise = new Promise((resolve, reject) => {
        stream = (client.writePreview(
          (
            err?: Error | null,
            result?: protos.google.actions.sdk.v2.IPreview | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        ) as unknown) as PassThrough;
        stream.write(request);
        stream.end();
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.writePreview as SinonStub)
          .getCall(0)
          .calledWith(null, {} /*, callback defined above */)
      );
      assert.deepStrictEqual(
        (stream!._transform as SinonStub).getCall(0).args[0],
        request
      );
    });

    it('invokes writePreview with error', async () => {
      const client = new actionssdkModule.v2.ActionsSdkClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.actions.sdk.v2.WritePreviewRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.writePreview = stubClientStreamingCall(
        undefined,
        expectedError
      );
      let stream: PassThrough;
      const promise = new Promise((resolve, reject) => {
        stream = (client.writePreview(
          (
            err?: Error | null,
            result?: protos.google.actions.sdk.v2.IPreview | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        ) as unknown) as PassThrough;
        stream.write(request);
        stream.end();
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.innerApiCalls.writePreview as SinonStub)
          .getCall(0)
          .calledWith(null, {} /*, callback defined above */)
      );
    });
  });

  describe('Path templates', () => {
    describe('preview', () => {
      const fakePath = '/rendered/path/preview';
      const expectedParameters = {
        project: 'projectValue',
        preview: 'previewValue',
      };
      const client = new actionssdkModule.v2.ActionsSdkClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.previewPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.previewPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('previewPath', () => {
        const result = client.previewPath('projectValue', 'previewValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.previewPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromPreviewName', () => {
        const result = client.matchProjectFromPreviewName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.previewPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchPreviewFromPreviewName', () => {
        const result = client.matchPreviewFromPreviewName(fakePath);
        assert.strictEqual(result, 'previewValue');
        assert(
          (client.pathTemplates.previewPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new actionssdkModule.v2.ActionsSdkClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});