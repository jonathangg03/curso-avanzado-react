import * as React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
    <Link to='/'>
      <Svg
        width={347.037}
        height={111.205}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='76.481 19.397 347.037 111.205'
        style={{
          background: '#fff'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <linearGradient
            id='prefix__editing-gradow-gradient'
            x1={0.964}
            x2={0.036}
            y1={0.687}
            y2={0.313}
            gradientUnits='objectBoundingBox'
          >
            <stop offset={0} stopColor='#50e2ff' />
            <stop offset={1} stopColor='#0a69aa' />
          </linearGradient>
          <filter
            id='prefix__editing-gradow-filter'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
          >
            <feFlood floodColor='#e4934b' result='flood' />
            <feComposite
              operator='in'
              in2='SourceAlpha'
              in='flood'
              result='shadow'
            />
            <feOffset dx={2.5} dy={0.9} in='SourceGraphic' result='offset-1' />
            <feOffset dx={-2.5} dy={-0.9} in='shadow' result='offset-2' />
            <feMerge>
              <feMergeNode in='offset-2' />
              <feMergeNode in='offset-1' />
            </feMerge>
          </filter>
        </defs>
        <g filter='url(#prefix__editing-gradow-filter)'>
          <path
            d='M27.53-3.9q-2.39 2.42-5.67 3.73t-6.53 1.31q-3.25 0-4.39-.57l-1.76 9.69-11.57 1.14 7.86-40.47 9.29-.97-.74 3.93q2.4-4.04 7.36-4.04 5.58 0 8.55 3.59 2.62 3.25 2.62 8.21 0 4.95-1.31 8.49-1.31 3.53-3.71 5.96zM14.65-19.89l-3.02 16.7q1.2 1.02 2.68 1.02 1.48 0 2.33-.57.86-.57 1.49-1.71 1.71-3.07 3.07-12.42.4-2.74.4-5.42 0-2.68-.6-3.53-.59-.86-1.73-.86-3.48 0-4.62 6.79zm44.4 10.26q1.43.97 1.43 3.1 0 2.14-1.09 3.51-1.08 1.37-2.85 2.28-3.64 1.88-7.58 1.88-3.93 0-6.24-.85-2.31-.86-3.85-2.46-3.02-3.02-3.02-8.55 0-8.6 4.68-13.85 5.01-5.64 13.73-5.64 5.42 0 8.1 2.28 1.99 1.71 1.99 4.5 0 10.03-17.32 10.03-.23 1.49-.23 2.74 0 2.62 1.17 3.62 1.16 1 3.33 1t4.47-1q2.31-1 3.28-2.59zm-11.63-6.22q4.05 0 6.39-2.5 2.34-2.4 2.34-6.22 0-1.31-.49-2.02-.48-.71-1.45-.71t-1.8.37q-.82.37-1.68 1.62-2.11 2.85-3.31 9.46zM67.2-5.7q0-1.54.8-5.42l3.02-15.39h-3.36l.23-1.7q6.84-2.06 13.45-7.07h2.74l-1.37 6.21h4.44l-.51 2.56h-4.39l-2.91 15.39q-.74 3.54-.74 4.74 0 2.73 2.4 3.3-.57 1.94-2.62 3.08-2.06 1.14-4.96 1.14-2.91 0-4.56-1.82Q67.2-2.51 67.2-5.7zm23.49-18.13q1.94-2.73 4.87-4.56 2.94-1.82 6.53-1.82 3.59 0 5.3 1.14l11.17-1.14-3.88 21.89q-1.99 11.17-6.21 15.56-4.05 4.16-11.91 4.16-5.99 0-9.41-1.88T83.73 4.5q0-2.33 1.77-3.67Q87.27-.51 90-.51q2.4 0 4.22 1.08 1.08.57 1.6 1.37-1.31 1.14-1.31 3.02 0 2.45 2.28 2.45 3.82 0 5.98-9.01.63-2.45 1.14-4.9-2.56 3.14-8.38 3.14-4.04 0-6.38-1.94t-2.34-6.5q0-2.85.97-6.07t2.91-5.96zm7.41 12.2q0 3.88 1.99 3.88 1.37 0 2.68-1.48 1.03-1.2 1.43-2.97l2.9-14.65q-.28-.05-.57-.17-.57-.23-1.31-.23-3.47 0-5.53 5.7-1.59 4.45-1.59 9.92zm40.52-4.39q2.06-3.64 2.06-7.35 0-2.45-1.77-2.45-1.37 0-2.79 2.34-1.49 2.33-1.94 5.35L131.21 0l-11.79 1.14 5.81-30.21 9.4-1.14-1.02 5.76q2.79-5.76 9.06-5.76 3.31 0 5.1 1.71 1.8 1.71 1.8 5.22 0 3.5-2.31 5.72-2.31 2.23-6.24 2.23-1.71 0-2.4-.69zm14.34 14.31q-1.34-1.48-1.94-3.82-.6-2.34-.6-6.16 0-3.81 1.31-7.29 1.32-3.48 3.71-5.99 4.9-5.24 13-5.24 2.9 0 5.01.97l9.75-.97-4.22 22.23q-.17.68-.17 1.94 0 1.25.77 2.05.77.8 1.91.91-.57 1.94-2.65 3.08-2.08 1.14-4.42 1.14t-3.9-.88q-1.57-.89-2.03-2.37-.91 1.43-2.85 2.34-1.94.91-4.53.91-2.59 0-4.7-.68-2.11-.69-3.45-2.17zm12.03-23.14q-.66 1.02-1.23 2.76-.57 1.74-1.51 6.39-.94 4.64-.94 7.95 0 3.3.51 4.27.52.97 1.43.97 1.82 0 3.16-1.74t1.85-4.81l3.03-16.7q-1.2-1.03-2.6-1.03-1.39 0-2.22.46-.83.45-1.48 1.48zm62.33 25.99q-6.9 0-6.9-5.36 0-2.34 1-6.87.99-4.53 1.34-6.35.79-4.16.79-5.47 0-2.91-2.16-2.91-1.43 0-2.79 1.97-1.37 1.96-2 5.89L213.07 0l-11.12 1.14 3.08-15.5q.51-2.57.97-5.48.45-2.9.45-3.36 0-2.62-1.93-2.62-1.31 0-2.74 1.94-1.42 1.93-2.22 5.92L196.08 0l-11.23 1.14 5.99-30.21 9.29-1.14-.97 5.76q1.48-3.08 4.22-4.42 2.73-1.34 7.01-1.34 2.45 0 4.04 1.2 1.6 1.19 2.11 3.13.97-1.99 3.45-3.16 2.48-1.17 5.53-1.17 3.05 0 4.56.66 1.51.65 2.42 1.73 1.54 2 1.54 5.65 0 3.59-1.54 11.05-.79 3.65-.79 4.99 0 1.34.76 2.14.77.8 1.91.91-.57 1.94-2.53 3.08-1.97 1.14-4.53 1.14z'
            fill='url(#prefix__editing-gradow-gradient)'
            transform='translate(132.677 98.34)'
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}
