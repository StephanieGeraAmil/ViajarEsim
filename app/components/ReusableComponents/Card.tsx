import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import Image from 'next/image'
import GoNow from '../HomeSections/GoNow'
import styles from './FeaturedDeal.module.css'
import Link from 'next/link'



interface Props {
    popular: boolean;
    header: string;
    ISOcode: string;
    imgPath: string;
    alt: string;
}


const Card = (props: Props) => {

    const urlString = '/' + props.header.toLowerCase().replace(/ /g, '-');

    return (
        <div className='relative'>
            {props.popular && <div className={styles.featuredDeal}><div className={styles.featuredDealBelow}></div>POPULAR</div>}
            <div className='flex space-x-24 border-custom rounded-custom items-center pl-24 justify-between bg-background overflow-hidden'>

                <div className="relative w-65 h-65 overflow-hidden rounded-full border-custom">
                    <span className={`fi fi-${props.ISOcode} h-65 w-65 absolute -left-1 -top-6 scale-150`}></span>
                </div>
                <div className='flex flex-col space-y-8 my-24'>
                    <h4 className='font-semibold text-subheading'>{props.header}</h4>
                    <div className='flex space-x-6'>
                        <p>Desde €6,00</p><span className='text-text-faded text-small font-light'>Eur</span>
                    </div>
                    <Link href={urlString}>
                        <GoNow ctaText='Ir ahora' />
                    </Link>
                </div>
                <Image className={`ml-auto -mb-48 scale-125 ${props.alt === 'Europa' ? 'translate-x-32' : ''}`}
                    src={props.imgPath}
                    alt={props.alt}
                    width={props.alt === 'Europa' ? 150 : 100}
                    height={props.alt === 'Europa' ? 150 : 100}
                />
            </div>
        </div>
    )
}

export default Card
