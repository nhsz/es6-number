import test from 'ava'
import isNumber from '../lib'

test('Test 1', t => {
  t.true(isNumber(-1))
})

test('Test 2', t => {
  t.true(isNumber(0))
})

test('Test 3', t => {
  t.true(isNumber(1))
})

test('Test Infinity', t => {
  t.true(isNumber(Infinity))
})

test('Test -Infinity', t => {
  t.true(isNumber(-Infinity))
})

test('Test NaN', t => {
  t.false(isNumber(NaN))
})

test('Test String 1', t => {
  t.false(isNumber('number'))
})

test('Test String 2', t => {
  t.false(isNumber('123'))
})

test('Test null', t => {
  t.false(isNumber(null))
})
