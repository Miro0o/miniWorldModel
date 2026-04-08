# Vector Database

[TOC]



## Res
### Related Topics



## Intro
> 🔗 https://en.wikipedia.org/wiki/Vector_database

A **vector database**, **vector store** or **vector search engine** is a [database](https://en.wikipedia.org/wiki/Database "Database") that uses the [vector space model](https://en.wikipedia.org/wiki/Vector_space_model "Vector space model") to store vectors (fixed-length lists of numbers) along with other data items. Vector databases typically implement one or more [approximate nearest neighbor](https://en.wikipedia.org/wiki/Nearest_neighbor_search#Approximation_methods "Nearest neighbor search") algorithms, so that one can search the database with a query vector to retrieve the closest matching database records.

Vectors are mathematical representations of data in a high-dimensional space. In this space, each dimension corresponds to a [feature](https://en.wikipedia.org/wiki/Feature_\(machine_learning\) "Feature (machine learning)") of the data, with the number of dimensions ranging from a few hundred to tens of thousands, depending on the complexity of the data being represented. A vector's position in this space represents its characteristics. Words, phrases, or entire documents, as well as images, audio, and other types of data, can all be vectorized.

These feature vectors may be computed from the raw data using machine learning methods such as [feature extraction](https://en.wikipedia.org/wiki/Feature_extraction "Feature extraction") algorithms, [word embeddings](https://en.wikipedia.org/wiki/Word_embeddings "Word embeddings") or [deep learning](https://en.wikipedia.org/wiki/Deep_learning "Deep learning") networks. The goal is that semantically similar data items receive feature vectors close to each other.

Vector databases can be used for [similarity search](https://en.wikipedia.org/wiki/Similarity_search "Similarity search"), [semantic search](https://en.wikipedia.org/wiki/Semantic_search "Semantic search"), [multi-modal search](https://en.wikipedia.org/wiki/Multi-modal_search "Multi-modal search"), [recommendations engines](https://en.wikipedia.org/wiki/Recommendations_engine "Recommendations engine"), [large language models](https://en.wikipedia.org/wiki/Large_language_models "Large language models") (LLMs), [object detection](https://en.wikipedia.org/wiki/Object_detection "Object detection"), etc.

Vector databases are also often used to implement [retrieval-augmented generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation "Retrieval-augmented generation") (RAG), a method to improve domain-specific responses of large language models. The retrieval component of a RAG can be any search system, but is most often implemented as a vector database. Text documents describing the domain of interest are collected, and for each document or document section, a feature vector (known as an "[embedding](https://en.wikipedia.org/wiki/Sentence_embedding "Sentence embedding")") is computed, typically using a deep learning network, and stored in a vector database. Given a user prompt, the feature vector of the prompt is computed, and the database is queried to retrieve the most relevant documents. These are then automatically added into the context window of the large language model, and the large language model proceeds to create a response to the prompt given this context.

The most important techniques for similarity search on high-dimensional vectors include:
- [Hierarchical Navigable Small World (HNSW) graphs](https://en.wikipedia.org/wiki/Hierarchical_Navigable_Small_World_graphs "Hierarchical Navigable Small World graphs")
- [Locality-sensitive Hashing (LSH)](https://en.wikipedia.org/wiki/Locality-sensitive_hashing "Locality-sensitive hashing") and Sketching
- [Product Quantization](https://en.wikipedia.org/w/index.php?title=Product_quantization&action=edit&redlink=1 "Product quantization (page does not exist)") (PQ)
- [Inverted Files](https://en.wikipedia.org/wiki/Inverted_index "Inverted index")
and combinations of these techniques.

In recent benchmarks, HNSW-based implementations have been among the best performers. Conferences such as the International Conference on Similarity Search and Applications, SISAP and the [Conference on Neural Information Processing Systems (NeurIPS)](https://en.wikipedia.org/wiki/Conference_on_Neural_Information_Processing_Systems "Conference on Neural Information Processing Systems") host competitions on vector search in large databases.



## Ref
