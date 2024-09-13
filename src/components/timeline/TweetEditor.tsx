import Profile from "../profile"
import Button from "../Button"
import AutoResizeTextarea from "../AutoResizeTextArea"

interface props {
    profile: string
}

function TweetEditor({ profile }: props) {
    return (
        <form className="flex flex-row w-full pt-4 pl-4 pr-4 gap-2 border-b border-gray-700 pb-4" action="">
            <Profile profile={profile}></Profile>
            <div className="flex flex-col gap-2 flex-1">
                <AutoResizeTextarea className="bg-black placeholder-gray-600 h-auto min-h-18"
                    name="tweetText" id="tweetText"
                    placeholder="Quoi de neuf ?!"></AutoResizeTextarea>
                <div className="flex justify-between w-full">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer text-blue-400">
                            <svg className="" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.75 0H2.25C1.01 0 0 1.01 0 2.25V17.75C0 18.99 1.01 20 2.25 20H17.75C18.99 20 20 18.99 20 17.75V2.25C20 1.01 18.99 0 17.75 0ZM2.25 1.5H17.75C18.163 1.5 18.5 1.837 18.5 2.25V11.926L14.642 8.068C14.502 7.928 
                                14.312 7.848 14.112 7.848H14.109C13.909 7.848 13.716 7.928 13.577 8.072L9.26 12.456L7.447 10.65C7.307 10.51 7.117 10.43 6.917 10.43C6.724 10.4 6.522 10.51 6.382 10.657L1.5 15.642V2.25C1.5 1.837 1.837 1.5 2.25 1.5ZM1.506 17.78L6.924 12.246L13.206 18.5H2.25C1.848 18.5 1.523 18.178 1.506 17.78ZM17.75 18.5H15.33L10.323 13.513L14.115 9.663L18.5 14.047V17.75C18.5 18.163 18.163 18.5 17.75 18.5Z"/>
                                <path d="M6.86805 7.851C7.71967 7.851 8.41005 7.16062 8.41005 6.309C8.41005 5.45738 7.71967 4.767 6.86805 4.767C6.01643 4.767 5.32605 5.45738 5.32605 6.309C5.32605 7.16062 6.01643 7.851 6.86805 7.851Z" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer text-blue-400">
                            <svg width="17" height="16" viewBox="0 0 22 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8.5V6.8H13.6V13.2H15.3V11.2H17.3V9.5H15.3V8.5H18ZM10.7 6.8H12.4V13.2H10.7V6.8ZM7.10002 8.39999C7.50002 8.39999 8.00002 8.59999 8.30002 8.89999L9.50002 7.89999C8.90002 7.19999 8.00002 6.8 7.10002 6.8C5.30002 6.8 3.90002 8.2 3.90002 10C3.90002 11.8 5.30002 13.2 7.10002 13.2C8.10002 13.2 8.90002 12.8 9.50002 12.1V9.6H6.70002V10.8H7.90002V11.4C7.70002 11.5 7.40002 11.6 7.10002 11.6C6.20002 11.6 5.50002 10.9 5.50002 10C5.50002 9.2 6.20002 8.39999 7.10002 8.39999Z" />
                                <path d="M19.5 0.0199966H2.5C1.26 0.0199966 0.25 1.027 0.25 2.267V17.774C0.25 19.012 1.26 20.02 2.5 20.02H19.5C20.74 20.02 21.75 19.012 21.75 17.774V2.267C21.75 1.027 20.74 0.0199966 19.5 0.0199966ZM20.25 17.774C20.25 18.184 19.914 18.52 19.5 18.52H2.5C2.086 18.52 1.75 18.184 1.75 17.774V2.267C1.75 1.855 2.086 1.52 2.5 1.52H19.5C19.914 1.52 20.25 1.855 20.25 2.267V17.774Z" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer text-blue-400">
                            <svg width="17" height="17" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.222 7.16H16.888C16.903 7.07 16.916 6.978 16.916 6.883V4.57C16.916 3.59 16.119 2.793 15.138 2.793H1.5V1.358C1.5 0.944002 1.164 0.608002 0.75 0.608002C0.336 0.608002 0 0.944002 0 1.358V18.83C0 19.245 0.336 19.58 0.75 19.58C1.164 19.58 1.5 19.245 1.5 18.83V17.396H12.056C13.036 17.396 13.834 16.599 13.834 15.619V13.306C13.834 13.211 13.82 13.119 13.806 
                                13.028H18.223C19.203 13.028 20.001 12.23 20.001 11.25V8.94C20.001 7.957 19.204 7.16 18.223 7.16H18.222ZM15.14 4.293C15.292 4.293 15.417 4.417 15.417 4.57V6.88C15.417 7.034 15.292 7.16 15.139 7.16H1.5V4.29H15.14V4.293ZM12.333 13.307V15.619C12.333 15.772 12.208 15.896 12.055 15.896H1.5V13.028H12.056C12.209 13.028 12.333 13.154 12.333 13.308V13.307ZM18.5 11.25C18.5 11.403 18.375 11.527 18.222 11.527H1.5V8.66H18.222C18.375 8.66 18.5 8.784 18.5 8.937V11.25Z" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer text-blue-400">
                            <svg width="17" height="17" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" />
                                <path d="M11 16.115C9.10801 16.115 7.36701 15.165 6.34401 13.571C6.12001 13.223 6.22101 12.761 6.57001 12.536C6.91801 12.31 7.38201 12.412 7.60601 12.762C8.35301 13.924 9.62201 14.617 11.001 14.617C12.38 14.617 13.649 13.924 14.397 12.763C14.621 12.413 15.085 12.313 15.433 12.538C15.783 12.762 15.883 13.226 15.659 13.574C14.634 15.168 12.893 16.119 11.001 16.119L11 16.115Z" />
                                <path d="M13.738 9.936C14.5543 9.936 15.216 9.27428 15.216 8.458C15.216 7.64173 14.5543 6.98 13.738 6.98C12.9217 6.98 12.26 7.64173 12.26 8.458C12.26 9.27428 12.9217 9.936 13.738 9.936Z" />
                                <path d="M8.26206 9.936C9.07833 9.936 9.74006 9.27428 9.74006 8.458C9.74006 7.64173 9.07833 6.98 8.26206 6.98C7.44578 6.98 6.78406 7.64173 6.78406 8.458C6.78406 9.27428 7.44578 9.936 8.26206 9.936Z" />
                            </svg>
                        </div>
                        <div className="w-8 h-8 p-2 rounded-full hover:bg-gray-600 hover:bg-opacity-30 cursor-pointer text-blue-400">
                            <svg width="17" height="17" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-37.9 17C-38 16.9 -38 16.9 -38 16.8C-37.9 16.8 -37.9 16.9 -37.9 17ZM18 1.2H16.7V0.899998C16.7 0.499998 16.4 0.0999985 15.9 0.0999985C15.5 0.0999985 15.1 0.399998 15.1 0.899998V1.2H7.7V0.899998C7.7 0.499998 7.4 0.0999985 6.9 0.0999985C6.5 0.0999985 6.1 0.399998
                                    6.1 0.899998V1.2H4.8C3.4 1.2 2.3 2.3 2.3 3.7V16.8C2.3 18.2 3.4 19.3 4.8 19.3H7.7C8.1 19.3 8.5 19 8.5 18.5C8.5 18.1 8.2 17.7 7.7 17.7H4.8C4.2 17.7 3.8 17.2 3.8 16.7V6.9C3.8 6.6 4.2 6.2 4.8 6.2H18C18.6 6.2 19 6.6 19 6.9V8.7C19 9.1 19.3 9.5 19.8 9.5C20.2 9.5 20.6 9.2 
                                    20.6 8.7V3.7C20.5 2.3 19.4 1.2 18 1.2ZM19 4.9C18.7 4.8 18.3 4.7 18 4.7H4.8C4.4 4.7 4.1 4.8 3.8 4.9V3.7C3.8 3.1 4.3 2.7 4.8 2.7H6.1V3.2C6.1 3.6 6.4 4 6.9 4C7.3 4 7.7 3.7 7.7 3.2V2.7H15.2V3.2C15.2 3.6 15.5 4 16 4C16.4 4 16.8 3.7 16.8 3.2V2.7H18C18.6 2.7 19 3.2 19 3.7V4.9Z"/>
                                <path d="M15.5 9.4C12.1 9.4 9.29999 12.2 9.29999 15.6C9.29999 19 12.1 21.8 15.5 21.8C18.9 21.8 21.7 19 21.7 15.6C21.7 12.2 18.9 9.4 15.5 9.4ZM15.5 20.4C12.9 20.4 10.8 18.3 10.8 15.7C10.8 13.1 12.9 11 15.5 11C18.1 11 20.2 13.1 20.2 15.7C20.2 18.2 18.1 20.4 15.5 20.4Z"/>
                                <path d="M18.9 17.7C18.8 17.9 18.5 18.1 18.3 18.1C18.2 18.1 18 18.1 17.9 18L14.8 16V13C14.8 12.6 15.1 12.2 15.6 12.2C16 12.2 16.4 12.5 16.4 13V15.2L18.8 16.7C19 16.9 19.1 17.3 18.9 17.7Z" />
                            </svg>
                        </div>
                    </div>
                    <Button text="Poster" fontStyle="font-bold" color="primary"></Button>
                </div>
            </div>
        </form>
    )
}

export default TweetEditor