// TEST for isFunction
module("isFunction");

    test('pass function',function(){
       ok($u.isFunction(function(){}),"passed");
    });

    test('pass array',function(){
        ok(!$u.isFunction([]),"not passed");
    });

    test('pass object',function(){
        ok(!$u.isFunction({}),"not passed");
    });

    test('pass string',function(){
        ok(!$u.isFunction('some'),"not passed");
    });

    test('pass number',function(){
        ok(!$u.isFunction(5),"not passed");
    });

    test('pass nothing',function(){
        ok(!$u.isFunction(),"not passed");
    });


// TEST for isArray
module("isArray");

    test('pass function',function(){
        ok(!$u.isArray(function(){}),"not passed");
    });

    test('pass array',function(){
        ok($u.isArray([]),"passed");
    });

    test('pass object',function(){
        ok(!$u.isArray({}),"not passed");
    });

    test('pass string',function(){
        ok(!$u.isArray('some'),"not passed");
    });

    test('pass number',function(){
        ok(!$u.isArray(5),"not passed");
    });

    test('pass nothing',function(){
        ok(!$u.isArray(),"not passed");
    });

// TEST for isObject
module("isObject");

    test('pass function',function(){
        ok(!$u.isObject(function(){}),"not passed");
    });

    test('pass array',function(){
        ok(!$u.isObject([]),"not passed");
    });

    test('pass object',function(){
        ok($u.isObject({}),"passed");
    });

    test('pass string',function(){
        ok(!$u.isObject('some'),"not passed");
    });

    test('pass number',function(){
        ok(!$u.isObject(5),"not passed");
    });

    test('pass nothing',function(){
        ok(!$u.isObject(),"not passed");
});

// TEST for isObject
module("isString");

    test('pass function',function(){
        ok(!$u.isString(function(){}),"not passed");
    });

    test('pass array',function(){
        ok(!$u.isString([]),"not passed");
    });

    test('pass object',function(){
        ok(!$u.isString({}),"not passed");
    });

    test('pass string',function(){
        ok($u.isString('some'),"passed");
    });

    test('pass number',function(){
        ok(!$u.isString(5),"not passed");
    });

    test('pass nothing',function(){
        ok(!$u.isString(),"not passed");
    });

// TEST for bind function
module("bind function");

    test('pass proper params',function(){
        var context = {name : 'test'};
        var func = function(arg) { return "name: " + (this.name || arg); };
        var _func = $u.bind(func, context);
        equal(_func(),"name: test","bind ok");
    });

    test('pass missing func',function(){
        var context = {name : 'test'};
        throws($u.bind(null, context),"Error throws");
    });

    test('pass missing context',function(){
        var func = function(arg) { return "name: " + (this.name || arg); };
        var _func = $u.bind(func, null);
        equal(_func(),"name: undefined","bind ok");
    });

    test('pass args instead of context',function(){
        var func = function(arg) { return "name: " + arg; };
        var _func = $u.bind(func, null, 'ling');
        equal(_func(),"name: ling","bind ok");
    });

// TEST for bind function
module("trim");

    test('trim pass sting', function(){
        var str = " some  ";
        equal($u.trim(str),"some","trimed");
    });

// TEST serialze
module("serialize");

    test('serialize pass object', function(){
        var obj = {name: 1,value: 2,some:4};
        equal($u.serialize(obj),"name=1&value=2&some=4","serialized");
    });

    test('serialize pass function', function(){
        var func = $u.serialize(function(){});
        ok($u.isFunction(func),"not serialized, input returned");
    });

    test('serialize pass string', function(){
        var str = $u.serialize('string');
        ok($u.isString(str),"not serialized, input returned");
    });

// TEST has
module("has");

    test('pass key object', function(){
        var obj = {name: 1,value: 2,some:4};
        ok($u.has(obj,'name'),"has");
    });

    test('pass key, object null', function(){
        throws(function(){$u.has(null,'name')},"throws Invalid object");
    });

    test('pass object, key null', function(){
        var obj = {name: 1,value: 2,some:4};
        throws(function(){$u.has(obj,null)},"throws Invalid key");
    });

// TEST get keys
module("keys");

    test('get keys',function(){
        var obj = {name: '1',value: '2', some: '3'};
        deepEqual($u.keys(obj),["name", "value", "some"],"key matched");
    });

    test('get keys of empty',function(){
        var obj = {};
        deepEqual($u.keys(obj),[],"key matched");
    });

    test('get keys of non object',function(){
        throws(function(){$u.keys('')},"throws error");
    });

// TEST get values
module("values");

    test('get values',function(){
        var obj = {name: '1',value: '2', some: '3'};
        deepEqual($u.values(obj),["1", "2", "3"],"value matched");
    });

    test('get values of empty',function(){
        var obj = {};
        deepEqual($u.values(obj),[],"value matched");
    });

    test('get values of non object',function(){
        throws(function(){$u.values('')},"throws error");
    });

// TEST get functions
module("get functions");

    test('getting func names',function(){
        var obj = {
            function1 : function () {},
            nonfunct : {},
            function2 : function () {}
        };
        deepEqual($u.functions(obj),["function1","function2"],"matched");
    });

// TEST empty object
module("empty test");

    test('pass empty object',function(){
        var obj = {};
        ok($u.isEmpty(obj),"empty");
    });

    test('pass not empty object',function(){
        var obj = {some: 1};
        ok(!$u.isEmpty(obj),"not empty");
    });