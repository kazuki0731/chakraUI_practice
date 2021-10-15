import { useColorMode } from '@chakra-ui/color-mode';
import React from 'react'

export const App3 = () => {
  // const { colorMode } = useColorMode();
  // useContextと同様に、colorModeの値が変わると
  // useColorModeを呼び出しているコンポーネントは子コンポーネントでなくても再レンダリングが起きる
  console.log("App3");
  return (
    <div>
      <h1>App3</h1>
    </div>
  )
}
