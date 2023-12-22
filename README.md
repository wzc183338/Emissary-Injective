<img src="https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/cd5c099d-97e9-4b02-a2b9-2a21c22a9e41" width=90>

# Introducing Emissary
![Screenshot1](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/8f16f46d-fa8c-49c8-b047-96cdd3d911e1)

Emissary is a comprehensive payout solution designed for the Injective network. This platform is specifically tailored for DAO organizations, Web 3.0 companies, and individual projects, offering seamless payout management in the Injective ecosystem With Emissary, you can easily create your own white-label token emissary, simplifying the onboarding process for your community members and users.

Consolidating all essential features in one place, Emissary provides a convenient and efficient one-stop solution for your payout needs. From handling transfer requests and implementing multi-signature safe to setting up token-gated access and incorporating NFT-derived functionalities, our platform covers it all. Additionally, Emissary facilitates treasury management with role setup, ensuring smooth and organized payout operations.

<hr>

### Use Cases (but not limited to)

⭐ `Bounties payout in DAO organization` 

DAO organizations involved in events, research, and projects with crypto payouts can streamline the process using Emissary's token emissary. It offers an automated and efficient solution, replacing traditional manual methods (manual bookkeeping and tedious transfer process using a wallet).

⭐ `Web 3.0 Hackathon Prizes Payout`

Emissary simplifies the process for hackathon hosts, eliminating the need for manual emails to collect transfer info and tax documents from winners. With Emissary, hosts can send a single instruction along with a link to the token emissary. This allows winners to easily submit their transfer requests and track the status of their prize payouts at any time, eliminating the need for constant email exchanges.

⭐ `Web 3.0 Business Salary Payout`

Emissary provides an ideal solution for Web 3.0 businesses that need to pay their employees with cryptocurrencies. It facilitates the organization of all salary payments while ensuring complete transparency through trackable transfer records. The role management feature in Emissary is particularly valuable for large companies where treasury management is a collaborative effort among team members. 

<hr>

# Key Features

### 1️⃣ White-label Token Emissary Builder

![Screenshot3](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/69627fdd-06f2-459b-abed-4767c06e6142)

Emissary offers support to numerous organizations and projects within the Injective network. Each of these entities possesses its own community and unique brand identity. Therefore, it is crucial to enable users to create and customize their token emissary. Emissary simplifies the entire token emissary creation process, providing features such as general information input, logo media integration, token assets setup, custom emissary URL slug, and more.

### 2️⃣ User Onboarding Experience

![Screenshot2](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/9b725f90-dd27-44e2-8b69-e254eb2636e8)

Emissary is dedicated to ensuring a seamless and effortless onboarding experience for your clients. To achieve this, Emissary offers two convenient options for clients to access their own accounts and initiate payouts within your token emissary.

The first option involves using a unique emissary code. Whenever a new token emissary is created in Emissary, it automatically generates a 6-digit code specific to that emissary. Copy and share this code with your clients. They can then paste it into the designated field on the emissary login page, granting them immediate access.

Alternatively, the second option allows clients to access the login page by directly browsing the custom URL slug after the emissary domain of your token emissary. With these two choices available, your clients can select the method that best suits their preferences and get started with ease!

### 3️⃣ Transfer Request Management (ERC20 token assets)

![Screenshot4](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/cb396845-cbdf-47ae-9299-24a308963592)

When a client needs to request a payout from an organization or project related to a specific program or event, the most efficient method is to submit a transfer request. Initiating a transfer request is a straightforward process: the client needs to provide some general information, select the relevant program, specify the desired payout amount, and upload any necessary tax documents. Once these steps are completed, the transfer request is ready to be reviewed.

Controllers, who have access to their own controllers' accounts, will be responsible for reviewing all transfer requests. Once the payout request undergoes the review process and receives approval, the controllers can proceed with the payout. This involves transferring the token assets from the treasury to the applicant's wallet.

To ensure transparency and accountability, both parties can track all transactions. This can be done through the inEVM chain explorer, which allows them to monitor the real-time progress of the transfer, or by referencing the transfer record memo to review the transaction history.

### 4️⃣ Multi-signature Emissary's Safe

![Screenshot5](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/9c51ead9-980b-4cd6-840e-24814cac8f2d)

Emissary's multi-signature safe serves as a secure solution tailored for milestone-based projects, separate payouts, or lump-sum payments. The key distinction between a transfer request and the multi-sig safe lies in the approval process. With the multi-signature safe, a designated group of controllers must collectively approve the transaction before the transfer can take place.

To clarify, once the number of controllers approving the transaction surpasses a specified approval threshold, the token assets held within the multi-signature smart contract will be transferred to the intended recipient's wallet. The design of Emissary's multi-sig safe is built upon the architecture of the SAFE core protocol and incorporates advanced implementation techniques for multi-signature smart contracts on the Injective network, ensuring a robust and reliable mechanism for secure fund transfers.

### 5️⃣ Decentralized Transfer Record Memo

![Screenshot6](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/5e936925-4e95-4484-874f-cca8345ba4b0)

In token asset transfers and treasury management for DAO organizations and Web 3.0 companies, transparency and decentralization are crucial. Emissary addresses this need by generating a transfer record memo, which meticulously records the entire history and processes of token asset transfers. This comprehensive record encompasses recipient addresses, token transfer amounts, transfer request statuses, timestamps for each process, and more. The transfer record memo is formatted in JSON data and is deployed into the IPFS network.

IPFS is a decentralized storage network powered by Filecoin, ensuring that the transfer record memos are stored in a distributed and tamper-resistant manner. Each token asset transfer record memo is assigned a unique CID (Content Identifier) that facilitates easy retrieval. Furthermore, these records can be readily utilized by third-party applications, fostering greater accessibility and utilization of the data. This approach strengthens transparency and enables seamless integration of Emissary's services with other blockchain-based platforms and applications.

### 6️⃣ Token-Gated (ERC721 token assets) Accesess Setup

![Screenshot7](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/70ae2489-aa49-4ff1-b9d3-066b71ab6b9e)

NFTs offer boundless possibilities for implementing various use cases, especially when it comes to payouts and setting up token-gated access. Emissary introduces multiple NFT use cases that can be integrated into your payout operations or utilized for managing your token emissary.

One of these features is the token-gated emissary, which allows you to control access to your emissary and restrict who can log in. By default, anyone with a Keplr or Metamask Wallet can access your token emissary. However, to prevent spam or unauthorized access, you have the option to limit login access to only your community members. This can be achieved by using your community's unique token as a pass to enter your token emissary.

Additionally, Emissary supports token-gated programs, which involve restricting access to certain programs using event-related NFTs. In essence, clients will need to possess specific event NFTs in order to open a transfer request for the corresponding program. 

### 7️⃣ NFT-Derived Features

![Screenshot8](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/5771ec5b-fc30-4de6-85db-6e3529659cc8)

NFTs open up exciting possibilities for enhancing client experiences during payouts. With Emissary, payouts are no longer tedious tasks. One of Emissary's innovative features is NFT redemption, which empowers controllers to create an NFT collection simultaneously when setting up a program. This NFT collection is then linked to the program. When a client submits a transfer request for a program associated with an NFT collection, they have the opportunity to mint the NFT upon receiving their payout. This feature is perfect for events like hackathons, as winners can mint a special hackathon NFT as a memento after receiving their prize payout.

Another valuable NFT-related feature is the specially designed NFT auto request submission. This feature streamlines the payout management process for events. Instead of sending out emails and instructing payout applicants on how to create transfer requests, Emissary enables you to bind all transfer request information to a specific NFT collection. When applicants have this particular NFT collection in their wallets, they can simply scan their wallet on the transfer request page and select the NFT collection. Emissary then automatically populates the necessary information for them, making the submission process seamless. For instance, if you create an NFT for the champion of a hackathon and link the payout information to that NFT, you can send it to the winner's wallet. They just need to scan it, and Emissary takes care of the rest, simplifying the entire submission process.

### 8️⃣ Treasury Management with Role Setup

![Screenshot9](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/41dcca17-c3da-41e4-8f8d-9cf9acabc2d5)

When it comes to treasury management, it typically requires a team, with each member having specific roles and varying levels of access to the treasury assets. Emissary revolutionizes and streamlines the entire process of setting up such a role management system for treasury management.

The token emissary owner can effortlessly assign controllers in the token emissary settings and allocate them distinct roles. These roles include Full Access, Admin, Approvers, Transfer Request Manager, and Safe Manager. With Emissary's built-in role management system, organizations can establish a standardized operating procedure (SOP) for their payout operations. This ensures smooth coordination among team members and enhances overall efficiency in managing the treasury.
# Future Plan: A Post-Hackathon Milestone

### Introducing the Emissary Plugin Marketplace 🎉

![Screenshot10](https://github.com/Zhixuan0318/Emissary-Injective/assets/115608573/f5243ade-ba30-4e37-bb3b-317c93e5a93f)

A groundbreaking expansion that takes Emissary to new heights. Our vision is to amplify the potential of payout solutions, offering a wide array of enhanced features. With the plugin marketplace, we envision the integration of Oracle services, cross-chain transfers, dynamic NFTs, decentralized query chat, on-chain scheduled transactions, and a host of other cutting-edge functionalities.

One of the most exciting aspects of this endeavor is our commitment to being open-source. We firmly believe in fostering collaboration and innovation within the community. To facilitate this, we will provide dedicated SDK and APIs, empowering developers to launch their custom emissary plugins, and further expanding the capabilities of our platform.

By venturing into the plugin marketplace, Emissary is poised to unlock unprecedented opportunities for seamless and versatile payout solutions. This advancement marks a significant milestone in our mission to revolutionize treasury management and foster the growth of Web 3.0 businesses. Join us as we embark on this remarkable journey toward a more interconnected and dynamic future in the Injective ecosystem.

# How to Test? ❤️ 

To skip the part of creating a whole new token emissary for testing, I created a testing token emissary. It is an example token emissary for the Injective community! Below are the two methods by which you can test Emissary:

### Via unique code

TBA

### Via custom URL

TBA
