# OpenTelemetry

[TOC]



## Res
🚧 https://github.com/open-telemetry/opentelemetry-java



## Intro
OpenTelemetry is the merging of OpenCensus and OpenTracing into a single project.

This project contains the following top level components:
- [OpenTelemetry API](https://github.com/open-telemetry/opentelemetry-java/blob/main/api):
    - [stable apis](https://github.com/open-telemetry/opentelemetry-java/blob/main/api/all/src/main/java/io/opentelemetry/api) including `Tracer`, `Span`, `SpanContext`, `Meter`, and `Baggage`
    - [context api](https://github.com/open-telemetry/opentelemetry-java/blob/main/context/src/main/java/io/opentelemetry/context) The OpenTelemetry Context implementation.
- [extensions](https://github.com/open-telemetry/opentelemetry-java/blob/main/extensions) define additional API extensions, which are not part of the core API.
- [sdk](https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk) defines the implementation of the OpenTelemetry API.
- [sdk-extensions](https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk-extensions) defines additional SDK extensions, which are not part of the core SDK.
- [OpenTracing shim](https://github.com/open-telemetry/opentelemetry-java/blob/main/opentracing-shim) defines a bridge layer from OpenTracing to the OpenTelemetry API.
- [OpenCensus shim](https://github.com/open-telemetry/opentelemetry-java/blob/main/opencensus-shim) defines a bridge layer from OpenCensus to the OpenTelemetry API.

This project publishes a lot of artifacts, listed in [releases](https://github.com/open-telemetry/opentelemetry-java#releases). [`opentelemetry-bom`](https://mvnrepository.com/artifact/io.opentelemetry/opentelemetry-bom) (BOM = Bill of Materials) is provided to assist with synchronizing versions of dependencies. [`opentelemetry-bom-alpha`](https://mvnrepository.com/artifact/io.opentelemetry/opentelemetry-bom-alpha) provides the same function for unstable artifacts. See [published releases](https://github.com/open-telemetry/opentelemetry-java#published-releases) for instructions on using the BOMs.

We would love to hear from the larger community: please provide feedback proactively.



## Ref

