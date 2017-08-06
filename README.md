# aws-lambda

Lambda functions for my infrastructure and life.

## Deploy

Manage with [APEX](https://github.com/apex/apex). IAM roles should be created by other way before deploy functions.

```
$ cd hello-world
$ apex deploy
$ apex invoke hello-world
$ apex logs hello-world
$ apex metrics hello-world
```

## Functions

### hello-world

- hello-world: A tiny script to check the behaivior of Lambda and Apex

### bot

- usapochi: Automated Kindle request for [うさぎは正義 2](https://www.amazon.co.jp/%E3%81%86%E3%81%95%E3%81%8E%E3%81%AF%E6%AD%A3%E7%BE%A9-2-%E3%83%AA%E3%83%A9%E3%82%AF%E3%83%88%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-Hug%E3%83%94%E3%82%AF%E3%82%B7%E3%83%96%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E4%BA%95%E5%8F%A3%E7%97%85%E9%99%A2/dp/4866570091/ref=sr_1_1?ie=UTF8&qid=1501914984&sr=8-1&keywords=%E3%81%86%E3%81%95%E3%81%8E%E3%81%AF%E6%AD%A3%E7%BE%A9+2)
- notify-to-slack: A notifier with SNS

## License

All code snippets are licensed under CC0 unless otherwise specified.
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
