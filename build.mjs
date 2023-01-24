import { buildHelper } from '@libs/build'
import {argv} from 'node:process'



await buildHelper({
    name: 'main',
    entryPoints: ['main/index.ts'],
    ssr: true,
    isProd: argv.includes('prod'),
    watch: argv.includes('watch'),
})


