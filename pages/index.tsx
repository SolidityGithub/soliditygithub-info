import type { NextPage } from 'next'

let title: string = " ____        _ _     _ _ _          ____ _ _   _           _     \n"
  + "/ ___|  ___ | (_) __| (_) |_ _   _ / ___(_) |_| |__  _   _| |__  \n"
  + "\\___ \\ / _ \\| | |/ _` | | __| | | | |  _| | __| '_ \\| | | | '_ \\ \n"
  + " ___) | (_) | | | (_| | | |_| |_| | |_| | | |_| | | | |_| | |_) |\n"
  + "|____/ \\___/|_|_|\\__,_|_|\\__|\\__, |\\____|_|\\__|_| |_|\\__,_|_.__/ \n"
  + "                             |___/                               \n";

let twitterUrl: string = "https://twitter.com/SolidityGithub";
let githubUrl: string = "https://github.com/SolidityGithub";
let emailUrl: string = "mailto:"+ "soliditygithub@protonmail.com";

const Home: NextPage = () => {
  return (
    <div className='max-w-prose mx-auto p-4 text-center font-mono flex h-screen'>
      <div className="m-auto">
        <div className='font-black'>
          <pre>
            {title}
          </pre>
        </div>
        <br></br>
        <div className='description'>
          <p>
            SolidityGithub is an automated bot tweeting every trending update from Solidity repositories on Github.
          </p>
        </div>
        <br></br>
        <div className='contacts'>
          contact us via
          <div className='text-sky-800 underline'><a href={twitterUrl}>twitter</a></div>
          <div className='text-sky-800 underline'><a href={githubUrl}>github</a></div>
          <div className='text-sky-800 underline'><a href={emailUrl}>email</a></div>
        </div>
      </div>
    </div>
  )
}

export default Home
