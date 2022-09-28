import NextLink from 'next/link'
import { Link as StyleLink } from '@/styles'

type Props = {
  children: JSX.Element | string,
  href: string
}

export default function Link({ children, href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref {...rest}>
      <StyleLink {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}</StyleLink>
    </NextLink>
  )
}