type fn = () => void;

export interface RegistrationObject {
  listenOn: string;
  emitOn: string[];
  callbacks: fn[];
}
