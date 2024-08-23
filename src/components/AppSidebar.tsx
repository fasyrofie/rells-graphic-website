import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './../store'
import {
  CCloseButton,
  CSidebar,
  CSidebarHeader,
} from '@coreui/react-pro'

import AppSidebarNav from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = (): JSX.Element => {
  const dispatch = useDispatch()
  const unfoldable = useTypedSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className='bg-dark bg-gradient'
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="bg-dark border-bottom">
        <CCloseButton
          className="m-0"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
