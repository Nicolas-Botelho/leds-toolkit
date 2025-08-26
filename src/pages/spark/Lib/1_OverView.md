---
sidebar_position: 1
title: Overview
---
In order to modularize, generate reuse and simplify the understanding of the Spark source code, we created a lib that does all the processing of the back-end generations.
We moved the entire concept of back-end generators that was previously done within Spark into the spark-generators-lib lib, leaving only one file within each respective folder within Spark, just referencing the lib call and maintaining the processing.
