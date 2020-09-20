import * as React from "react";
import { ReactStyle } from "../theme/css";

interface appProps {
imageUrl:string;
imageAlt?:string;
backgroundColor?:string;
}


const SpacingImage: React.SFC<appProps> = ({
  /*appProps HERE */
  imageUrl,
  imageAlt,
  backgroundColor,
}) => {
  return (
    <div style={Object.assign({},styles.page,{backgroundColor:backgroundColor})}>
      <div style={{overflow: 'hidden'}}>
        <img src={imageUrl}
          style={{ objectFit: 'contain' }}
          alt={imageAlt?imageAlt:'image'}
          height='100%'
          width='auto' />
      </div>
    </div>
  );
};

const styles: ReactStyle = {
  page: {
    textAlign: 'center',
    margin: '15vh 0px',
    width: '100%',
    alignContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '472px',
    maxHeight: '700px',
    overflow: 'hidden',
    objectFit: 'scale-down',
  },
};

export default SpacingImage;