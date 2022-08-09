import React from 'react'

type InstagramIconProps = {
  link: string;
}

export const TwitterIcon: React.FC<InstagramIconProps> = ({ link }) => {
  return (
    <a
      href={link}
      className="text-[#CDCED6] hover:text-primary mx-3"
    >
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        className="fill-current"
      >
        <path
          d="M7.45148 9.81506C8.81564 9.81506 9.92151 8.70919 9.92151 7.34503C9.92151 5.98087 8.81564 4.875 7.45148 4.875C6.08732 4.875 4.98145 5.98087 4.98145 7.34503C4.98145 8.70919 6.08732 9.81506 7.45148 9.81506Z"
        />
        <path
          d="M10.1343 0.744141H4.72579C2.57516 0.744141 0.829102 2.4902 0.829102 4.64083V10.0068C0.829102 12.2 2.57516 13.946 4.72579 13.946H10.0917C12.2849 13.946 14.031 12.2 14.031 10.0494V4.64083C14.031 2.4902 12.2849 0.744141 10.1343 0.744141ZM7.45134 10.5817C5.64141 10.5817 4.21475 9.11244 4.21475 7.34509C4.21475 5.57774 5.6627 4.1085 7.45134 4.1085C9.2187 4.1085 10.6666 5.57774 10.6666 7.34509C10.6666 9.11244 9.23999 10.5817 7.45134 10.5817ZM11.923 4.4066C11.71 4.64083 11.3906 4.76859 11.0286 4.76859C10.7092 4.76859 10.3898 4.64083 10.1343 4.4066C9.90009 4.17238 9.77232 3.87427 9.77232 3.51228C9.77232 3.15029 9.90009 2.87348 10.1343 2.61796C10.3685 2.36244 10.6666 2.23468 11.0286 2.23468C11.348 2.23468 11.6887 2.36244 11.923 2.59667C12.1359 2.87348 12.2849 3.19288 12.2849 3.53357C12.2637 3.87427 12.1359 4.17238 11.923 4.4066Z"
        />
        <path
          d="M11.0496 3.00098C10.7728 3.00098 10.5386 3.2352 10.5386 3.51202C10.5386 3.78883 10.7728 4.02306 11.0496 4.02306C11.3264 4.02306 11.5607 3.78883 11.5607 3.51202C11.5607 3.2352 11.3477 3.00098 11.0496 3.00098Z"
        />
      </svg>
    </a>
  )
}