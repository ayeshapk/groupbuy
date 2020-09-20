// Describing the shape of the system's slice of state
export interface ReactStyle {
    [key: string]: React.CSSProperties,
}
  

export const globalCss: ReactStyle = {
    page: {
      margin: '10px 10px',
      border: '1px solid grey',
      padding: '12px 6px',
      borderRadius: '5px'
    },
    input: {
      padding: '10px 15px', width: '50%',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px',
      borderBottomLeftRadius: '5px',
      borderTopLeftRadius: '5px',
      marginLeft: '10px',
      marginRight: '10px',
    },
    button: {
      cursor: 'pointer',
      padding: '10px 14px',
      fontSize: '1em',
      border: '0',
      userSelect: 'none',
      outline: 'none',
      color: 'white',
      backgroundColor: '#800059',
      borderBottomRightRadius: '5px',
      borderTopRightRadius: '5px',
      borderBottomLeftRadius: '5px',
      borderTopLeftRadius: '5px',
      marginLeft: '1px',
      marginRight: '1px',
  
    }
  };