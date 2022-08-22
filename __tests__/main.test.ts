import {createMessage} from '../src/main'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  let output = cp.execSync(`node ${ip}`, options).toString()
  expect(output).toContain('Comment only will be created on pull requests!')
})

test('function output', () => {
  let output = createMessage('__tests__/pytest-coverage.txt')
  expect(output).toContain('| TOTAL| 255| 0| 100%|')
})
