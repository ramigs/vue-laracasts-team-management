export interface TeamMember {
  name: string
  email: string
  status: string
}

export interface Team {
  name: string
  logo: string
  spots: number
  members: Array<TeamMember>
}
