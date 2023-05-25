// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';


// Help


export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort();
    const commandSummaries = {
      about: 'a small about section',
      banner: 'reprint the coolest banner you have ever seen',
      bing: 'bing search (for whatever reason you use bing) for anything. Example: bing Google will return bing results for Google',
      cd: 'change directories',
      date:'display the current date and time information',
      duckduckgo: 'duckduckgo results for anything. Example: duckduckgo Google will return duckduckgo results for Google',
      echo:'print anything you want. Example: echo Hello World',
      email:'send me an email',
      github:'go to my Github',
      google:'you can google something here',
      hello:'say hello to someone you want',
      help:'well duh',
      idle:'python opinion that does not matter',
      java:'run a java code',
      linkedin:'go to my linkedin',
      ls:'list all directories',
      projects:'list my github repos in a (very) ugly manner',
      quote:'get a random quote from a random guy',
      react:'react opinion that does not matter',
      readme:'open the readme for my github',
      reddit:'search reddit for something',
      repo:'go to my github repo, again',
      resume:'download my latest resume',
      sudo:'surprise',
      sumfetch:'fetch an ugly summary',
      vue:'vue opinion that does not matter',
      weather:'get weather for a place you like',
      whoami:'find out who you actually are'
      
    };
    let c = '';
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      c += `${command}: ${commandSummaries[command]}\n`;
    }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger command completion. (Might bug out sometimes)
[ctrl+l]/clear: clear the terminal.\n
Type 'sumfetch' to display an ugly summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


export const hello = async (args: string[]): Promise<string> => {
  if (args[0] === "Shrek") {
    return "It's all ogre now!";
  } else {
    return `${args.join(' ')} says hello!`;
  }
};





// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `You are ${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `this
does
nothing
tbh
just
a 
bunch
of 
fake 
directories
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can contribute to my repos`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const idle = async (args: string[]): Promise<string> => {
  return `Idle is good. PyCharm is better tho.`;
};

export const react = async (args: string[]): Promise<string> => {
  return `React is the goat. Also try Vue.`;
};

export const vue = async (args: string[]): Promise<string> => {
  return `Vue is great. Also try React.`;
};

export const java = async (args?: string[]): Promise<string> => {
  return `Java is painful. But it works.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `I'm not a complete idiot, some parts are missing. `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████████   █████   ████ ██████   ██████            █████ █████ ██████████   ██████████  
  ███░░░░░███ ░░███   ███░ ░░██████ ██████            ░░███ ░░███ ░░███░░░░███ ░░███░░░░███ 
 ░███    ░███  ░███  ███    ░███░█████░███             ░░███ ███   ░███   ░░███ ░███   ░░███
 ░███████████  ░███████     ░███░░███ ░███  ██████████  ░░█████    ░███    ░███ ░███    ░███
 ░███░░░░░███  ░███░░███    ░███ ░░░  ░███ ░░░░░░░░░░    ███░███   ░███    ░███ ░███    ░███
 ░███    ░███  ░███ ░░███   ░███      ░███              ███ ░░███  ░███    ███  ░███    ███ 
 █████   █████ █████ ░░████ █████     █████            █████ █████ ██████████   ██████████  
░░░░░   ░░░░░ ░░░░░   ░░░░ ░░░░░     ░░░░░            ░░░░░ ░░░░░ ░░░░░░░░░░   ░░░░░░░░░░   
                                                                                            
                                                                                            
                                                                                            

Type 'help' to see the list of available commands. (Might bug out sometimes)
Type 'sumfetch' to display an ugly summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for my Github repositories.
`;
};
