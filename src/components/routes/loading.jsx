import React from 'react'
import {DotLoader} from 'react-spinners'
const styles = {
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'center',
  alignItems : 'center',

}

const Loading = () => {
  return (
    <div style={styles}>

      <DotLoader  color='#fff' height={100} />

    </div>
    )
}

export default Loading