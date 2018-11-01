factory-girl-dynamoose
=====================

A [Dynamoose](https://dynamoosejs.com/) adapter for [factory-girl](https://github.com/aexmachina/factory-girl). Heavily inspired by [factory-girl-mongoose](https://github.com/jesseclark/factory-girl-mongoose). Only model with id as key is supported currently.

[![Build Status](https://travis-ci.org/EONIQ/factory-girl-dynamoose.png)](https://travis-ci.org/EONIQ/factory-girl-dynamoose)

## Usage

```javascript
import { factory } from 'factory-girl';
import DynamooseAdapter from 'factory-girl-dynamoose';

factory.setAdapter(DynamooseAdapter);
```
