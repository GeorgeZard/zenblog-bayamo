import { getBlogPermalink, getHomePermalink } from './permalinks';

// Bayamo navigation configuration using AstroWind's permalink system
export interface BayamoNavItem {
  text: string;
  href: string;
}

export const bayamoNavigation: BayamoNavItem[] = [
  {
    text: 'HOME',
    href: getHomePermalink(),
  },
  {
    text: 'ABOUT',
    href: '#about',
  },
  {
    text: 'SERVICES', 
    href: '#services',
  },
  {
    text: 'GALLERY',
    href: '#gallery',
  },
  {
    text: 'BLOG',
    href: getBlogPermalink(),
  },
  {
    text: 'CONTACT',
    href: '#contact',
  },
];

export const getBayamoNavigation = (): BayamoNavItem[] => bayamoNavigation;