import type {Props as IconProps} from '../components/Icon.astro';

/** Icon links to social media — edit these with links to your profiles! */
export const iconLinks: { label: string; href: string; icon: IconProps['icon'] }[] = [
  { label: 'Reddit', href: 'https://www.reddit.com/r/BunkersNBadasses/', icon: 'reddit-logo' },
  { label: 'Discord', href: 'https://discord.gg/RgtEaGYcWq', icon: 'discord-logo' },
  { label: 'GitHub', href: 'https://github.com/fimion/badass-bunker', icon: 'github-logo' },
];
