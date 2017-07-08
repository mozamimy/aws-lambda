# aws-lambda

Lambda functions for my infrastructure and life.

## deploy

Manage with [APEX](https://github.com/apex/apex). An IAM role should be created by other way before deploy functions.

```
$ cd hello-world
$ apex deploy
$ apex invoke hello-world
$ apex logs hello-world
$ apex metrics hello-world
```

## functions

### hello-world

- hello-world: A tiny script to check the behaivior of Lambda and Apex

## License

All code snippets are licensed under CC0 unless otherwise specified.
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
