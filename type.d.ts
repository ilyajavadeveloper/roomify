interface AuthState{
isSignedIn:boolean,
    userName:string|null,
    userId:string|null
}

type AuthContext={
    isSignedIn:boolean;
    userName:string|null,
    userId:strin|null,
    refreshAuth:()=>Promise<boolean>;
    signedOut:()=>Promise<boolean>
    signedIn:()=>Promise<boolean>
}