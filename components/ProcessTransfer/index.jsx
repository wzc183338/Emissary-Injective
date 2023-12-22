import React from 'react'
import Image from 'next/image';
import ImgProcess from '../../../public/process.gif';
import {ProcessLoading} from './ProcessTransfer.styles'

function ProcessTransfer() {
  return (
    <ProcessLoading>
      <div className="holder">
        <div className="img-holder">
          <Image src={ImgProcess} alt="img"/>
        </div>
        <div className="text-box">
          <strong className="title">Processing transfer request payout...</strong>
          <p>Sign and confirm the transaction via the wallet popup. 
Do not close the window during this process</p>
        </div>
      </div>
    </ProcessLoading>
  )
}

export default ProcessTransfer;