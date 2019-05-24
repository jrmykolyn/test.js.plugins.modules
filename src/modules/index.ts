type fn = () => void;

interface RegistrationObject {
  listenOn: string;
  emitOn: string[];
  callbacks: fn[];
}

export RegisrationObject;
