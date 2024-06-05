import { Container, Text, VStack, Box, Link, Flex, Spacer, HStack } from "@chakra-ui/react";

const newsItems = [
  {
    title: "AI headphones let you listen to a single person in crowd, by looking at them",
    url: "https://washington.edu",
    points: 373,
    author: "geeky",
    time: "6 hours ago",
    comments: 143,
  },
  {
    title: "Three Laws of Software Complexity",
    url: "https://mahesha.bitbucket.io",
    points: 5,
    author: "rdum",
    time: "2 hours ago",
    comments: 24,
  },
  {
    title: "TTE: Terminal Text Effects",
    url: "https://chrisbuilds.github.io",
    points: 1322,
    author: "malgak",
    time: "14 hours ago",
    comments: 209,
  },
  {
    title: "NSA Ghidra open-source reverse engineering framework",
    url: "https://ghidra-sre.org",
    points: 395,
    author: "modrin",
    time: "5 hours ago",
    comments: 120,
  },
  {
    title: "Llama 3-V: Matching GPT-4-V with a 100x smaller model and 500 dollars",
    url: "https://aksh-garg.medium.com",
    points: 395,
    author: "minimax",
    time: "14 hours ago",
    comments: 55,
  },
  {
    title: "ChatTTS-Best open source TTS Model",
    url: "https://github.com/2noise",
    points: 122,
    author: "informator",
    time: "9 hours ago",
    comments: 18,
  },
  {
    title: "Reproducing GPT-2 in 1m. of L",
    url: "https://github.com/karpathy",
    points: 905,
    author: "tush",
    time: "18 hours ago",
    comments: 56,
  },
  {
    title: "Google Search document leak reveals inner workings of ranking algorithm",
    url: "https://searchengineland.com",
    points: 19,
    author: "isacard",
    time: "54 minutes ago",
    comments: 3,
  },
  {
    title: "Galios/Counter Mode and random nonces",
    url: "https://neilmadden.blog",
    points: 47,
    author: "thunderborg",
    time: "1 hour ago",
    comments: 8,
  },
  {
    title: "Paris's Catacomb Mushrooms",
    url: "https://atlasobscura.com",
    points: 47,
    author: "jihad",
    time: "5 hours ago",
    comments: 8,
  },
  {
    title: "USB disk as /dev/sda on a non-rooted smartphone using Termux, QEMU, Alpine Linux",
    url: "https://gist.github.com",
    points: 73,
    author: "skylower",
    time: "3 hours ago",
    comments: 14,
  },
  {
    title: "A Former OpenAI board member explains why they fired Sam Altman",
    url: "https://theverge.com",
    points: 93,
    author: "princet",
    time: "3 hours ago",
    comments: 34,
  },
  {
    title: "Show HN: I made a free app to calibrate your turntable by simply playing a song",
    url: "https://okat.best",
    points: 370,
    author: "okat",
    time: "19 hours ago",
    comments: 193,
  },
  {
    title: "Ask HN: Can anyone recommend a Windows Systems programming book?",
    url: "https://news.ycombinator.com",
    points: 21,
    author: "alex",
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Princeton astrophysicists re-imagined world map (2021)",
    url: "https://princeton.edu",
    points: 17,
    author: "servato",
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Writing an NVMe Driver in Rust",
    url: "https://tum.de",
    points: 15,
    author: "fool",
    time: "14 hours ago",
    comments: 18,
  },
  {
    title: "How to use I2C devices (in Apache NutX: Adding support for an I2C device",
    url: "https://embeddedrelated.com",
    points: 29,
    author: "bupen",
    time: "8 hours ago",
    comments: 14,
  },
  {
    title: "Shadowcast: A particle simulation programming environment for everyone",
    url: "https://tinlizzie.org",
    points: 15,
    author: "tylork",
    time: "10 hours ago",
    comments: 8,
  },
  {
    title: "Proposal to change default annotation processing policy in JDK 23",
    url: "https://opendjk.org",
    points: 64,
    author: "fry",
    time: "1 hour ago",
    comments: 16,
  },
  {
    title: "What We Learned from a Year of Building with LLMs",
    url: "https://oreilly.com",
    points: 127,
    author: "767",
    time: "9 hours ago",
    comments: 16,
  },
  {
    title: "Webview: Tiny cross-platform webview library for C/C++",
    url: "https://github.com/webview",
    points: 29,
    author: "webview",
    time: "9 hours ago",
    comments: 18,
  },
  {
    title: "Show HN: I made a free app to calibrate your turntable by simply playing a song",
    url: "https://okat.best",
    points: 370,
    author: "okat",
    time: "19 hours ago",
    comments: 193,
  },
  {
    title: "Ask HN: Can anyone recommend a Windows Systems programming book?",
    url: "https://news.ycombinator.com",
    points: 21,
    author: "alex",
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Princeton astrophysicists re-imagined world map (2021)",
    url: "https://princeton.edu",
    points: 17,
    author: "servato",
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Writing an NVMe Driver in Rust",
    url: "https://tum.de",
    points: 15,
    author: "fool",
    time: "14 hours ago",
    comments: 18,
  },
  {
    title: "How to use I2C devices (in Apache NutX: Adding support for an I2C device",
    url: "https://embeddedrelated.com",
    points: 29,
    author: "bupen",
    time: "8 hours ago",
    comments: 14,
  },
  {
    title: "Shadowcast: A particle simulation programming environment for everyone",
    url: "https://tinlizzie.org",
    points: 15,
    author: "tylork",
    time: "10 hours ago",
    comments: 8,
  },
  {
    title: "Proposal to change default annotation processing policy in JDK 23",
    url: "https://opendjk.org",
    points: 64,
    author: "fry",
    time: "1 hour ago",
    comments: 16,
  },
  {
    title: "What We Learned from a Year of Building with LLMs",
    url: "https://oreilly.com",
    points: 127,
    author: "767",
    time: "9 hours ago",
    comments: 16,
  },
  {
    title: "Webview: Tiny cross-platform webview library for C/C++",
    url: "https://github.com/webview",
    points: 29,
    author: "webview",
    time: "9 hours ago",
    comments: 18,
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Flex mb={4} alignItems="center">
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold" color="orange.500">Hacker News</Link>
          <Link href="#">new</Link>
          <Link href="#">past</Link>
          <Link href="#">comments</Link>
          <Link href="#">ask</Link>
          <Link href="#">show</Link>
          <Link href="#">jobs</Link>
          <Link href="#">submit</Link>
        </HStack>
        <Spacer />
        <Link href="#" color="orange.500">login</Link>
      </Flex>
      <VStack spacing={4} align="stretch">
        {newsItems.map((item, index) => (
          <Box key={index} p={2} borderBottom="1px" borderColor="gray.200">
            <Text fontSize="lg">
              {index + 1}. <Link href={item.url} color="blue.500">{item.title}</Link>
            </Text>
            <Text fontSize="sm" color="gray.500">
              {item.points} points by {item.author} {item.time} | {item.comments} comments
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;