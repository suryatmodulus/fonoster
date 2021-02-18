<a name="Domains"></a>

## Domains ⇐ <code>FonosService</code>
Use Fonos Domains, a capability of Fonos SIP Proxy Subsystem,

**Kind**: global class  
**Extends**: <code>FonosService</code>  
**See**: module:core:FonosService  

* [Domains](#Domains) ⇐ <code>FonosService</code>
    * [new Domains()](#new_Domains_new)
    * [.createDomain(request)](#Domains+createDomain) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getDomain(ref)](#Domains+getDomain) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.updateDomain(request)](#Domains+updateDomain) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.listDomains(request)](#Domains+listDomains) ⇒ <code>Promise.&lt;ListDomainsResponse&gt;</code>
    * [.deleteDomain(ref)](#Domains+deleteDomain)

<a name="new_Domains_new"></a>

### new Domains()
Constructs a new Domains object.

**Example**  
```js
const Fonos = require('@fonos/sdk')
```
<a name="Domains+createDomain"></a>

### domains.createDomain(request) ⇒ <code>Promise.&lt;Object&gt;</code>
Creates a new Domain on the SIP Proxy subsystem.

**Kind**: instance method of [<code>Domains</code>](#Domains)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> | Request for the provision of a new Domain |
| request.name | <code>string</code> | Friendly name for the SIP domain |
| request.domainUri | <code>string</code> | Domain URI. FQDN is recommended |
| request.egressNumberRef | <code>string</code> | A valid reference to a Number in Fonos |
| request.egressRule | <code>string</code> | Regular expression indicating when a call will be routed via request.egressNumberRef |
| request.accessDeny | <code>string</code> | Optional list of IPs or networks that cannot communicate with this Domain |
| request.accessAllow | <code>string</code> | Optiona list of IPs or networks allow if request.accessDeny is defined |

**Example**  
```js
const request = {
```
<a name="Domains+getDomain"></a>

### domains.getDomain(ref) ⇒ <code>Promise.&lt;Object&gt;</code>
Retrives a Domain by its reference.

**Kind**: instance method of [<code>Domains</code>](#Domains)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The domain  
**Throws**:

- if ref is null or Domain does not exist


| Param | Type | Description |
| --- | --- | --- |
| ref | <code>string</code> | Reference to Domain |

**Example**  
```js
domains.getDomain(ref)
```
<a name="Domains+updateDomain"></a>

### domains.updateDomain(request) ⇒ <code>Promise.&lt;Object&gt;</code>
Update a Domain at the SIP Proxy subsystem.

**Kind**: instance method of [<code>Domains</code>](#Domains)  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> | Request for the update of an existing Domain |
| request.ref | <code>string</code> | To update a Domain you must provide its reference |
| request.name | <code>string</code> | Friendly name for the SIP domain |
| request.egressNumberRef | <code>string</code> | A valid reference to a Number in Fonos |
| request.egressRule | <code>string</code> | Regular expression indicating when a call will be routed via request.egressNumberRef |
| request.accessDeny | <code>string</code> | Optional list of IPs or networks that cannot communicate with this Domain |
| request.accessAllow | <code>string</code> | Optiona list of IPs or networks allow if request.accessDeny is defined |

**Example**  
```js
const request = {
```
<a name="Domains+listDomains"></a>

### domains.listDomains(request) ⇒ <code>Promise.&lt;ListDomainsResponse&gt;</code>
List the Domains registered in Fonos SIP Proxy subsystem.

**Kind**: instance method of [<code>Domains</code>](#Domains)  
**Returns**: <code>Promise.&lt;ListDomainsResponse&gt;</code> - List of Domains  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> |  |
| request.pageSize | <code>number</code> | Number of element per page (defaults to 20) |
| request.pageToken | <code>string</code> | The next_page_token value returned from a previous List request, if any |

**Example**  
```js
const request = {
```
<a name="Domains+deleteDomain"></a>

### domains.deleteDomain(ref)
Deletes a Domain from SIP Proxy subsystem. Notice, that in order to delete

**Kind**: instance method of [<code>Domains</code>](#Domains)  

| Param | Type | Description |
| --- | --- | --- |
| ref | <code>string</code> | Reference to the Domain |

**Example**  
```js
const ref = '507f1f77bcf86cd799439011'
```