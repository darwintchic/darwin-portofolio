'use client';
import { Col } from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image';

export const ProjectCard = ({ lien,title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className='mb-2'>
    <Link href={lien} className="text-white">
      <div className="proj-imgbx">
        <Image src={imgUrl} width={350} height={350} alt='imgUrl' className="w-100" style={{height:'30vh',objectFit:'cover'}} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </Link>
    </Col>
  )
}