import React from 'react';

const Hexagon = ({ color }) => {
  return (
    <svg
      width='209'
      height='189'
      viewBox='0 0 209 189'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_1_157)'>
        <path
          d='M22.4641 92.5C20.3205 88.7872 20.3205 84.2128 22.4641 80.5L58.2859 18.4548C60.4295 14.742 64.391 12.4548 68.6782 12.4548L140.322 12.4548C144.609 12.4548 148.571 14.742 150.714 18.4548L186.536 80.5C188.679 84.2128 188.679 88.7872 186.536 92.5L150.714 154.545C148.571 158.258 144.609 160.545 140.322 160.545L68.6782 160.545C64.391 160.545 60.4295 158.258 58.2859 154.545L22.4641 92.5Z'
          fill={color}
        />
      </g>
      <g filter='url(#filter1_d_1_157)'>
        <path
          d='M22.4641 92.5C20.3205 88.7872 20.3205 84.2128 22.4641 80.5L58.2859 18.4548C60.4295 14.742 64.391 12.4548 68.6782 12.4548L140.322 12.4548C144.609 12.4548 148.571 14.742 150.714 18.4548L186.536 80.5C188.679 84.2128 188.679 88.7872 186.536 92.5L150.714 154.545C148.571 158.258 144.609 160.545 140.322 160.545L68.6782 160.545C64.391 160.545 60.4295 158.258 58.2859 154.545L22.4641 92.5Z'
          fill={color}
        />
      </g>
      <defs>
        <filter
          id='filter0_d_1_157'
          x='0.856445'
          y='0.454834'
          width='207.287'
          height='188.09'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='10' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1_157'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1_157'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_1_157'
          x='0.856445'
          y='0.454834'
          width='207.287'
          height='188.09'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='10' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1_157'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1_157'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Hexagon;
