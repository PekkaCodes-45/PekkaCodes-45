export namespace VersionApplicationEvent {
  export namespace VersionCreated {
    export const key = 'version.application.version.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
