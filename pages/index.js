import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headers from '../components/Header/header'
import Body from '../components/body/index'

export default function Home() {
  return (
    <div>
    <Headers/>
    <Body/>
    </div>
  )
}
