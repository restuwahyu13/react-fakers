import React from 'react'
import { shallow } from 'enzyme'
import { renderHook, act } from '@testing-library/react-hooks'
import Faker from '../src/components/Faker'
import JsonPlaceHolder from '../src/components/JsonPlaceHolder'
import Dummy from '../src/components/Dummy'
import UIFaces from '../src/components/UIFaces'
import useFaker from '../src/hooks/Faker'
import useJsonPlaceHolder from '../src/hooks/JsonPlaceHolder'
import useDummy from '../src/hooks/Dummy'

describe('Components Group Test', () => {
  let jestMock
  beforeEach(() => {
    jestMock = jest.fn()
  })

  test('Faker property hash been called', () => {
    const wrapper = shallow(<Faker success={jestMock} />)
    expect(wrapper.length).toEqual(1)
  })
  test('JPH property hash been called', () => {
    const wrapper = shallow(<JsonPlaceHolder success={jestMock} />)
    expect(wrapper.length).toEqual(1)
  })

  test('Dummy property hash been called', () => {
    const wrapper = shallow(<Dummy success={jestMock} />)
    expect(wrapper.length).toEqual(1)
  })

  test('UIFaces property hash been called', () => {
    const wrapper = shallow(<UIFaces success={jestMock} />)
    expect(wrapper.length).toEqual(1)
  })
})

describe('Hooks Group Test', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  /**
   * @description Faker Test Teritory
   */

  it('useFaker hash been called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFaker())
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(10)
  })

  it('useFaker using params', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFaker({ params: { users: { quantity: 3 } } }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(3)
  })

  /**
   * @description Json Place Holder Test Teritory
   */

  it('useJsonPlaceHolder hash been called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJsonPlaceHolder())
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(10)
  })

  it('useJsonPlaceHolder using limit', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJsonPlaceHolder({ options: { limit: 5 } }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(5)
  })

  it('useJsonPlaceHolder using filters', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJsonPlaceHolder({ filters: { id: 1 } }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(1)
  })

  it('useJsonPlaceHolder using params', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useJsonPlaceHolder({ type: 'posts', params: { userId: 1, id: 1 } }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success[0].title).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  })

  it('useJsonPlaceHolder using params and limit', async () => {
    const props = {
      type: 'posts',
      params: { userId: 1 },
      options: { limit: 5 }
    }

    const { result, waitForNextUpdate } = renderHook(() => useJsonPlaceHolder({ ...props }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(5)
  })

  /**
   * @description Dummy Test Teritory
   */

  it('useDummy hash been called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDummy())
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(20)
  })

  it('useDummy using limit', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDummy({ options: { limit: 5 } }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(5)
  })

  it('useDummy using params and limit', async () => {
    const props = {
      params: { user: { id: '0F8JIqi4zwvb77FGz6Wt', refs: 'post' } },
      options: { limit: 5 }
    }

    const { result, waitForNextUpdate } = renderHook(() => useDummy({ ...props }))
    await act(async () => {
      jest.runAllTimers()
      jest.setTimeout(8000)
      await waitForNextUpdate()
    })
    expect(result.current.success.length).toEqual(5)
  })
})
