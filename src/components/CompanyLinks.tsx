import React from 'react'
import Image from "next/image";
import { Button} from '@chakra-ui/react'
import Styles from "../styles/companyLinks.module.css";

const CompanyLinks = () => {
  return (
    <div className={Styles.MainWrapper}>
      <Image
              alt="link-img"
              width="130"
              height="130"
              src="/images/link.png"
            />
            <div className={Styles.heading}>No links available.</div>
            <div className={Styles.text}>Why don't you add some links today?</div>
            <div className={Styles.buttonWrapper}>
                <Button colorScheme='purple'>+ Add Link</Button>
                <Button colorScheme='purple' isDisabled={true}>Edit</Button>
            </div>
    </div>
  )
}

export default CompanyLinks
