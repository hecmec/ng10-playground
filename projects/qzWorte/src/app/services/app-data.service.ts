import { Injectable } from '@angular/core';

enum TopicLevel {
  essential = 1,
  medium = 2,
  special = 3,
}

export interface Topic {
  name: string;
  nameFr: string;
  iconSvg: string;
  level: TopicLevel;
  order: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private readonly _topicList: Topic[] = [
    {
      name: 'Animals',
      nameFr: 'Les animaux',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Calendar',
      nameFr: 'Le calendrier',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Cooking',
      nameFr: 'Cuisiner',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Quantities and mesures',
      nameFr: 'Quantités et mesures',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Introduce oneself',
      nameFr: 'Se présenter',
      level: TopicLevel.essential,
      order: 1,
      iconSvg: ``,
    },
    {
      name: 'Qualities',
      nameFr: 'Les qualités',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Greetings and Politeness',
      nameFr: 'Salutation et politesse',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: ``,
    },
    {
      name: 'Clothing',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.12C5.31,13.5 4.68,13.5 4.29,13.12L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.07V20A1,1 0 0,1 16,21M20.42,9.58L16.11,5.28C15.8,5.63 15.43,5.94 15,6.2C14.16,6.7 13.13,7 12,7C10.3,7 8.79,6.32 7.89,5.28L3.58,9.58L5,11L8,9H9V19H15V9H16L19,11L20.42,9.58Z"
      />
    </svg>`,
    },
    {
      name: 'Time',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
      />
    </svg>`,
    },
    {
      name: 'Date',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z"
      />
    </svg>`,
    },
    {
      name: 'Eating',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"
      />
    </svg>`,
    },
    {
      name: 'Drinking',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"
      />
    </svg>`,
    },
    {
      name: 'Breakfast',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M18,13.14C19.24,12.17 20,10.89 20,9.5C20,6.46 16.42,4 12,4C7.58,4 4,6.46 4,9.5C4,10.89 4.76,12.17 6,13.14V20H18V13.14M8,18V14H12V18H8Z"
      />
    </svg>`,
    },
    {
      name: 'Furniture',
      nameFr: 'Fourniture',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20 10V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V10A2 2 0 0 0 2 12V17H3.33L4 19H5L5.67 17H18.33L19 19H20L20.67 17H22V12A2 2 0 0 0 20 10M13 7H18V10H13M6 7H11V10H6M20 15H4V12H20Z"
      />
    </svg>`,
    },
    {
      name: 'Holiday',
      nameFr: 'Vacances',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z"
      />
    </svg>`,
    },
    {
      name: 'Kitchen',
      nameFr: 'Cuisine',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16.13 15.13L18 3H14V2H10V3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H7.23L7.87 15.13C6.74 16.05 6 17.43 6 19V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V19C18 17.43 17.26 16.05 16.13 15.13M5 9V5H6.31L6.93 9H5M15.67 5L14.29 14H9.72L8.33 5H15.67M16 20H8V19C8 17.35 9.35 16 11 16H13C14.65 16 16 17.35 16 19V20M12 17C12.55 17 13 17.45 13 18S12.55 19 12 19 11 18.55 11 18 11.45 17 12 17Z"
      />
    </svg>`,
    },
    {
      name: 'Home',
      nameFr: 'La maison',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
      />
    </svg>`,
    },
    {
      name: 'Health',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18 14H14V18H10V14H6V10H10V6H14V10H18M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M20 20H4V4H20V20Z"
      />
    </svg>`,
    },
    {
      name: 'Plants',
      nameFr: '',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M15.5,9.63C14.21,10.32 13.03,11.2 12,12.26C10.97,11.19 9.79,10.31 8.5,9.63C8.74,6.86 9.92,4.14 12.06,2C14.18,4.12 15.31,6.84 15.5,9.63M12,15.45C14.15,12.17 17.82,10 22,10C22,20 12.68,21.88 12,22C11.32,21.89 2,20 2,10C6.18,10 9.85,12.17 12,15.45M12.05,5.19C11.39,6.23 10.93,7.38 10.68,8.58L12,9.55L13.35,8.57C13.12,7.37 12.68,6.22 12.05,5.19M12,19.97C12,19.97 18,19 19.74,12.25C14,14 12,19.1 12,19.1C12,19.1 9,13 4.26,12.26C6,19 12,19.97 12,19.97Z"
      />
    </svg>`,
    },
    {
      name: 'Familly',
      nameFr: 'Famille et amis',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7 2C5.9 2 5 2.9 5 4S5.9 6 7 6 9 5.11 9 4 8.11 2 7 2M5 7C3.89 7 3 7.89 3 9V15H5V22H10V11.6L12.53 16H14.97L16 14.66V22H20V17H21V14C21 12.89 20.11 12 19 12H16.5C15.9 12 15.37 12.26 15 12.68C14.67 13.1 14.32 13.56 14 14H13.69L10 7.66C9.84 7.38 9.22 7 8.5 7H5M18 8C17.17 8 16.5 8.67 16.5 9.5S17.17 11 18 11 19.5 10.33 19.5 9.5 18.83 8 18 8Z"
      />
    </svg>`,
    },
    {
      name: 'Shopping',
      nameFr: 'Le shopping',
      level: TopicLevel.essential,
      order: 10,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
      />
    </svg>`,
    },
    {
      name: 'Sport',
      nameFr: 'Sport et fitness',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.3,2C11.33,2.03 10.58,2.84 10.61,3.8C10.62,4.04 10.67,4.27 10.77,4.5L11.06,5.14V5.14C11.1,5.27 11.03,5.41 10.89,5.45C10.8,5.5 10.7,5.45 10.63,5.37L10.21,4.82C9.88,4.4 9.38,4.14 8.85,4.13C7.88,4.11 7.08,4.88 7.06,5.84C7.05,6.26 7.19,6.66 7.45,7L7.87,7.5H7.88C7.96,7.63 7.93,7.79 7.82,7.87C7.73,7.94 7.61,7.94 7.53,7.87L7,7.45C6.66,7.19 6.25,7.05 5.84,7.06C4.88,7.08 4.11,7.88 4.13,8.85C4.14,9.38 4.4,9.88 4.82,10.21L5.39,10.65C5.5,10.75 5.5,10.91 5.38,11C5.31,11.07 5.21,11.09 5.12,11.05H5.11L4.5,10.77C4.27,10.68 4.04,10.62 3.8,10.61C2.84,10.58 2.03,11.34 2,12.31C2,13.03 2.4,13.69 3.06,13.97L14.45,19.04L19.04,14.45L13.97,3.06C13.69,2.39 13,1.97 12.3,2M13.13,6.1C13.55,6.09 13.93,6.33 14.09,6.71L17.14,13.55L13.19,9.61L12.26,7.5C11.96,6.87 12.42,6.12 13.13,6.1M9.85,8.85C10.12,8.85 10.37,8.95 10.56,9.15L15.37,13.96C15.77,14.34 15.78,14.97 15.4,15.37C15,15.77 14.38,15.78 13.96,15.37L9.15,10.56C8.75,10.18 8.74,9.54 9.13,9.15C9.32,8.95 9.58,8.85 9.85,8.85M7.13,12.17C7.26,12.17 7.4,12.21 7.5,12.26L9.63,13.2L13.57,17.14L6.71,14.09C5.69,13.65 6.03,12.14 7.13,12.17M20.28,16.04L16.04,20.28L16.89,21.13C17.65,21.88 18.75,22.17 19.78,21.9C20.81,21.62 21.62,20.81 21.9,19.78C22.17,18.75 21.88,17.65 21.13,16.89L20.28,16.04Z"
      />
    </svg>`,
    },
    {
      name: 'Education',
      nameFr: 'Education et école',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
      />
    </svg>`,
    },
    {
      name: 'Weather',
      nameFr: 'La météo, le climat',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z"
      />
    </svg>`,
    },
    {
      name: 'Jobs/Work',
      nameFr: '',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"
      />
    </svg>`,
    },
    {
      name: 'Pastimes',
      nameFr: 'Les loisirs',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11 23C9.9 23 9 22.1 9 21V19H15V21C15 22.1 14.1 23 13 23H11M12 3C12.28 3 12.55 3 12.81 3.05C13.42 4.22 14 6.26 14 9C14 11.1 13 16 13 16H11C11 16 10 11.1 10 9C10 6.26 10.58 4.22 11.19 3.05C11.45 3 11.72 3 12 3M12 1C11.29 1 10.61 1.09 9.95 1.26C8.78 2.83 8 5.71 8 9C8 11.28 8.38 13.37 9 16C9 17.1 9.9 18 11 18H13C14.1 18 15 17.1 15 16C15.62 13.37 16 11.28 16 9C16 5.71 15.22 2.83 14.05 1.26C13.39 1.09 12.71 1 12 1M4 8C4 11.18 5.85 15.92 8.54 17.21C8 16.21 7.61 14.67 7.34 13C6.55 11.53 6 9.62 6 8C6 6.66 6.44 5.67 7.47 4.8C7.73 3.67 8.09 2.65 8.54 1.79C5.85 3.08 4 4.82 4 8M15.46 1.79C15.91 2.65 16.27 3.67 16.53 4.8C17.56 5.67 18 6.66 18 8C18 9.62 17.45 11.53 16.66 13C16.39 14.67 16 16.21 15.46 17.21C18.15 15.92 20 11.18 20 8S18.15 3.08 15.46 1.79Z"
      />
    </svg>`,
    },
    {
      name: 'Physical Description',
      nameFr: 'Description physique',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Humain body',
      nameFr: 'Le corps humain',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Corors and Forms',
      nameFr: 'Couleurs et formes',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Fruits',
      nameFr: 'Les fruits',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Vegetables',
      nameFr: 'Les légumes',
      level: TopicLevel.essential,
      order: 100,
      iconSvg: ``,
    },

    // medium
    {
      name: 'Art',
      nameFr: '',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z"
      />
    </svg>`,
    },
    {
      name: 'Gaming',
      nameFr: 'Jeux',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11 17C11 17 11.3 19 9 22H15C12.7 19 13 17 13 17S14 18 16 18 20 16 20 14C20 9 15 7 12 2C9 7 4 9 4 14C4 16 6 18 8 18S11 17 11 17M13 14H11C11 14 10 16 8 16C7.1 16 6 14.9 6 14C5.8 11 9.9 8.2 12 5.4C14.1 8.1 18.2 10.9 18 14C18 14.9 16.9 16 16 16C14 16 13 14 13 14Z"
      />
    </svg>`,
    },
    {
      name: 'Tools',
      nameFr: 'Outils et bricolage',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
      />
    </svg>`,
    },
    {
      name: 'Gardening',
      nameFr: 'Jardinage',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18.5 14C17.55 14 16.69 14.38 16.06 15H9.39L5.74 3H2V5H4.26L7 14.05C6.85 14.03 6.68 14 6.5 14C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21C7.89 21 9.09 20.18 9.65 19H15.35C15.91 20.18 17.11 21 18.5 21C20.43 21 22 19.43 22 17.5S20.43 14 18.5 14M6.5 19C5.67 19 5 18.33 5 17.5S5.67 16 6.5 16 8 16.67 8 17.5 7.33 19 6.5 19M18.5 19C17.67 19 17 18.33 17 17.5S17.67 16 18.5 16 20 16.67 20 17.5 19.33 19 18.5 19M10.13 14L9.53 12H12.76C13.5 12 14.21 12.43 14.55 13.11L15 14H10.13Z"
      />`,
    },
    {
      name: 'Beauty',
      nameFr: 'Beauté',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19.5 1L18.41 3.41L16 4.5L18.41 5.59L19.5 8L20.6 5.59L23 4.5L20.6 3.41L19.5 1M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 10.53 21.67 9.13 21.1 7.87L19.86 10.57C19.95 11.04 20 11.5 20 12C20 16.43 16.43 20 12 20C7.57 20 4 16.43 4 12C4 11.95 4 11.91 4 11.86A10 10 0 0 0 9.74 6.31C11.61 8.61 14.44 10 17.5 10C17.94 10 18.39 9.97 18.83 9.91L17.96 8C17.81 8 17.65 8 17.5 8C14.68 8 12.1 6.5 10.66 4.12C11.1 4.05 11.54 4 12 4C12.5 4 12.96 4.05 13.42 4.13L16.13 2.91C14.87 2.33 13.47 2 12 2M8.09 5A8 8 0 0 1 4.41 9.5C5.04 7.57 6.37 6 8.09 5M9 11.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75M15 11.75A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75Z"
      />
    </svg>`,
    },
    {
      name: 'Geography',
      nameFr: 'Géographie',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      />
    </svg>`,
    },
    {
      name: 'Musik',
      nameFr: 'La musique et les instruments de musique',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
      />
    </svg>`,
    },
    {
      name: 'Bathroom',
      nameFr: 'La salle de bain',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Law and Justice',
      nameFr: 'Loi et justice',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Town and places',
      nameFr: 'Ville et lieux',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Tourism',
      nameFr: 'Voyage et tourisme',
      level: TopicLevel.medium,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Professions',
      nameFr: 'Métiers et professions',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'Countries and Continents',
      nameFr: 'Les pays et continents',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'Insects',
      nameFr: 'Les insectes',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'Nationalities',
      nameFr: 'Les nationalités',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'IT',
      nameFr: 'L’informatique',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'Utensils',
      nameFr: 'Les ustensiles',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },
    {
      name: 'Business',
      nameFr: 'Les affaires',
      level: TopicLevel.medium,
      order: 30,
      iconSvg: ``,
    },

    // special
    {
      name: 'Money, Banking, Finance',
      nameFr: 'L’argent, la banque, la finance',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.5,10H4.5V17H6.5V10M12.5,10H10.5V17H12.5V10M21,19H2V21H21V19M18.5,10H16.5V17H18.5V10M11.5,3.26L16.71,6H6.29L11.5,3.26M11.5,1L2,6V8H21V6L11.5,1Z"
      />
    </svg>`,
    },
    {
      name: 'Automotive',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6,11L7,7H17L18,11M18.92,6C18.71,5.4 18.14,5 17.5,5H6.5C5.86,5 5.29,5.4 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V18H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6M7,16H5V14H7V16M19,16H17V14H19V16M14,16H10V14H14V16Z"
      />
    </svg>`,
    },
    {
      name: 'Telephone',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M15,2A1,1 0 0,0 14,3V6H10C8.89,6 8,6.89 8,8V20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V8C17,7.26 16.6,6.62 16,6.28V3A1,1 0 0,0 15,2M10,8H15V13H10V8M10,15H11V16H10V15M12,15H13V16H12V15M14,15H15V16H14V15M10,17H11V18H10V17M12,17H13V18H12V17M14,17H15V18H14V17M10,19H11V20H10V19M12,19H13V20H12V19M14,19H15V20H14V19Z"
      />
    </svg>`,
    },
    {
      name: 'Agriculture',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11,12H8.82C9.62,12.5 10.35,13.07 11,13.68V12M7,11C7.27,5.88 9.37,2 12,2C14.66,2 16.77,5.94 17,11.12C18.5,10.43 20.17,10 22,10C16.25,12.57 18.25,22 12,22C6,22 7.93,12.57 2,10C3.82,10 5.5,10.4 7,11M11,11V9H8.24L8.03,11H11M11,8V6H9.05C8.8,6.6 8.6,7.27 8.43,8H11M11,5V3.3C10.45,3.63 9.95,4.22 9.5,5H11M12,3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42,16.45 14.15,18 14.32,19.23C15.31,17.56 15.96,14.84 16,11.76C15.94,7 14.13,3 12,3Z"
      />
    </svg>`,
    },
    {
      name: 'Currencies',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6,4H8V2H10V4H12V2H14V4.03C16.25,4.28 18,6.18 18,8.5C18,9.8 17.45,11 16.56,11.8C17.73,12.61 18.5,13.97 18.5,15.5C18.5,18 16.5,20 14,20V22H12V20H10V22H8V20H6L6.5,18H8V6H6V4M10,13V18H14A2.5,2.5 0 0,0 16.5,15.5A2.5,2.5 0 0,0 14,13H10M10,6V11H13.5A2.5,2.5 0 0,0 16,8.5A2.5,2.5 0 0,0 13.5,6H13.5L10,6Z"
      />
    </svg>`,
    },
    {
      name: 'Chemistry',
      nameFr: 'Chemie',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6Z"
      />
    </svg>`,
    },
    {
      name: 'Horseriding',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,4H20V1H16V4C16,4 18,8 18,12C18,16 16,19 12,19C8,19 6,16 6,12C6,8 8,4 8,4V1H4V4H5C5,4 2,8 2,14C2,19 7,23 12,23C17,23 22,19 22,14C22,8 19,4 19,4M4,13C3.4,13 3,12.6 3,12C3,11.4 3.4,11 4,11C4.6,11 5,11.4 5,12C5,12.6 4.6,13 4,13M6,19C5.4,19 5,18.6 5,18C5,17.4 5.4,17 6,17C6.6,17 7,17.4 7,18C7,18.6 6.6,19 6,19M12,22C11.4,22 11,21.6 11,21C11,20.4 11.4,20 12,20C12.6,20 13,20.4 13,21C13,21.6 12.6,22 12,22M18,19C17.4,19 17,18.6 17,18C17,17.4 17.4,17 18,17C18.6,17 19,17.4 19,18C19,18.6 18.6,19 18,19M20,13C19.4,13 19,12.6 19,12C19,11.4 19.4,11 20,11C20.6,11 21,11.4 21,12C21,12.6 20.6,13 20,13Z"
      />
    </svg>`,
    },
    {
      name: 'Language',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: `<svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
      />`,
    },
    {
      name: 'Society and Government',
      nameFr: 'Société et gouvernement',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Politics',
      nameFr: 'Politique',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Economics',
      nameFr: 'Economie',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Daily Schedule',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Personal Style',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Hobbies',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Computer Usage',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Tech Gadgets',
      nameFr: '',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Geography',
      nameFr: 'Géographie',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Environment and Ecology',
      nameFr: 'Environnement et écologie',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
    {
      name: 'Religions',
      nameFr: 'Religions et croyances',
      level: TopicLevel.special,
      order: 100,
      iconSvg: ``,
    },
  ];

  public get topicList(): Topic[] {
    return this._topicList;
  }

  constructor() {}
}
