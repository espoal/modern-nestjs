import {buildHelper} from '@libs/build'
import {argv} from 'node:process'

const external = [
    '@nestjs/core',
    '@nestjs/common',
    'reflect-metadata',
    'rxjs',
]


await buildHelper({
    name: 'main',
    entryPoints: ['main/main.ts'],
    external,
    ssr: true,
    isProd: argv.includes('prod'),
    watch: argv.includes('watch'),
})


