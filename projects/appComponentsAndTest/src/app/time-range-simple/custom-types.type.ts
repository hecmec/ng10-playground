type Nothing = null | undefined | '';

// optional types

type SomeString = string;

type OptionalString = SomeString | Nothing;

type SomeNumber = number;

type OptionalNumber = SomeNumber | Nothing;

// generic
type Option<T> = T | Nothing;

// type OptionalString = Option<string>;
// type OptionalNumber = Option<number>;

// email type and creator func
type Email = string;

// let createEmailAddress: Option<Email> = (email: string) =>
//   !!email === true && email.includes('@')
//     ? (email as Email)
//     : (null as Nothing);
