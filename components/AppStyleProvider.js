import React, { Component } from 'react'
import { Platform } from 'react-native'
import { StyleProvider } from 'native-base'
import getTheme from '../node_modules/native-base/src/theme/components'
import platform from '../node_modules/native-base/src/theme/variables/platform'

const primary = '#ff6600'

const variables = {
  // Footer
  footerDefaultBg: Platform.OS === 'ios' ? '#F8F8F8' : primary,

  // Footer Tab
  tabBarActiveTextColor: Platform.OS === 'ios' ? primary : '#fff',

  // Header
  toolbarBtnColor: Platform.OS === 'ios' ? primary : '#fff',
  toolbarDefaultBg: Platform.OS === 'ios' ? '#F8F8F8' : primary,

  // Segment
  segmentBackgroundColor: Platform.OS === 'ios' ? '#f8f8f8' : primary,
  segmentActiveBackgroundColor: Platform.OS === 'ios' ? primary : '#fff',
  segmentTextColor: Platform.OS === 'ios' ? primary : '#fff',
  segmentActiveTextColor: Platform.OS === 'ios' ? '#fff' : primary,
  segmentBorderColor: Platform.OS === 'ios' ? primary : '#fff',
}

export default class AppStyleProvider extends Component {
  render () {
    return (
      <StyleProvider style={getTheme({ ...platform, ...variables })}>
        {this.props.children}
      </StyleProvider>
    )
  }
}
