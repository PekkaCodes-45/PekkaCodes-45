import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d8f7bd05-d193-4fb5-8351-078fd7133e58', '7Marcos48@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=9', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1391553d-c2d5-4d77-9403-273b2a7850fd', '13Tevin94@hotmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=15', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('85019e9f-1028-41ea-8a5b-c99163f4f5b0', '19Alf.Dickinson-Stokes@yahoo.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=21', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9856ecc6-2bd7-47fa-ac45-78857022b87d', '25Christina_Hegmann69@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=27', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('3b6757b0-4967-4b6e-89d2-44b057f3a365', '31Ova.Cassin89@yahoo.com', 'Diana', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cb500dfd-dbc5-4b9c-8b59-7ca3220c4830', '37Kelsi.Schmitt@gmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=39', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('af100895-c0bc-432c-91d2-901bdc895b81', '43Keshawn_Shanahan24@hotmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=45', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('47bf39ce-99e9-4df4-9600-1c264e5cd6ad', '49Litzy.Stokes90@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9fdde556-9698-417c-a167-abd9c33e1d9f', '55Electa_Effertz@hotmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7ffcec9c-fc0d-4904-a5d9-fe3a722bf724', 'Version Control Update', 'You have been granted access to a new document.', 'Version Control', '64Caesar99@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '85019e9f-1028-41ea-8a5b-c99163f4f5b0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bbc45fa9-ad30-4e81-8b12-7e2feee56661', 'Document Update Alert', 'A document you had access to has been permanently deleted.', 'John Doe', '71Alexys.Marquardt@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', 'af100895-c0bc-432c-91d2-901bdc895b81');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e4bece2c-ccef-47dd-a06f-6787d12e2eee', 'Document Deletion Notice', 'A new document has been uploaded to your repository.', 'John Doe', '78Maryjane_Bogisich@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '3b6757b0-4967-4b6e-89d2-44b057f3a365');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7de6b15c-868a-494c-a653-eae4ca2f8b90', 'Permission Granted', 'A new document has been uploaded to your repository.', 'Jane Smith', '85Rosetta_Wehner21@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ca422031-d410-4cfc-8b77-c47e9feef3ba', 'Permission Granted', 'A new version of your document is now available.', 'John Doe', '92Patience_Walter@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '85019e9f-1028-41ea-8a5b-c99163f4f5b0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4c9b218b-c03e-4550-b467-6446933a3a0a', 'Permission Granted', 'A new document has been uploaded to your repository.', 'John Doe', '99Caterina22@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('844d111c-9110-43fa-95e0-420cb8b96175', 'New Document Uploaded', 'A document you had access to has been permanently deleted.', 'Version Control', '106Eliza.Grant12@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '47bf39ce-99e9-4df4-9600-1c264e5cd6ad');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d3d5aa20-6672-4d5c-b11d-e55488836226', 'Document Deletion Notice', 'You have been granted access to a new document.', 'Admin', '113Tomas82@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '9fdde556-9698-417c-a167-abd9c33e1d9f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1b65d991-e972-4681-98c9-347c6f320d0a', 'Document Update Alert', 'A new document has been uploaded to your repository.', 'Admin', '120Emely72@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '85019e9f-1028-41ea-8a5b-c99163f4f5b0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e987a974-af51-4057-9a25-859459dd50ef', 'New Document Uploaded', 'Your document has been successfully updated.', 'Document System', '127Concepcion66@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '47bf39ce-99e9-4df4-9600-1c264e5cd6ad');

INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('376cbeb1-40ae-4448-a3cd-376f7b97577e', 'Project Plan  Q4', 'Strategic document outlining the marketing goals tactics and measures for the upcoming year.', 'pptx', 'https://i.imgur.com/YfJQV5z.png?id=134', '9856ecc6-2bd7-47fa-ac45-78857022b87d');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('ea3f5648-5ea1-42e7-a424-645c28ac66cb', 'Software Architecture Guide', 'Strategic document outlining the marketing goals tactics and measures for the upcoming year.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=139', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('1b5a1f98-817d-4974-8509-d3d36dd3d3e0', 'Marketing Strategy Document', 'Detailed project plan for the fourth quarter including milestones and deliverables.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=144', 'af100895-c0bc-432c-91d2-901bdc895b81');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('58018e85-b0c1-4444-a2dc-3f61bdc492e0', 'Annual Report 2023', 'Strategic document outlining the marketing goals tactics and measures for the upcoming year.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=149', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('ff3f4994-e03a-44b1-9952-ce0ee8094214', 'Marketing Strategy Document', 'This document outlines the annual financial performance and key achievements of the year.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=154', 'd8f7bd05-d193-4fb5-8351-078fd7133e58');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('05e97672-2e28-4631-9b72-b40762be9765', 'Annual Report 2023', 'Detailed project plan for the fourth quarter including milestones and deliverables.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=159', '9856ecc6-2bd7-47fa-ac45-78857022b87d');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('49dcf242-33a3-42ff-b886-14335b2cd32d', 'Annual Report 2023', 'This document outlines the annual financial performance and key achievements of the year.', 'pdf', 'https://i.imgur.com/YfJQV5z.png?id=164', '9856ecc6-2bd7-47fa-ac45-78857022b87d');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('0409dca6-d739-4dbf-b560-5d04e8055826', 'Employee Handbook', 'Detailed project plan for the fourth quarter including milestones and deliverables.', 'txt', 'https://i.imgur.com/YfJQV5z.png?id=169', '9fdde556-9698-417c-a167-abd9c33e1d9f');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('9b7ad36f-e104-4ab3-90ac-36af7d82734e', 'Project Plan  Q4', 'This document outlines the annual financial performance and key achievements of the year.', 'xlsx', 'https://i.imgur.com/YfJQV5z.png?id=174', '9fdde556-9698-417c-a167-abd9c33e1d9f');
INSERT INTO "document" ("id", "title", "description", "format", "storagePathUrl", "authorId") VALUES ('4c53506d-4301-4a66-af44-a34109adb66e', 'Project Plan  Q4', 'Strategic document outlining the marketing goals tactics and measures for the upcoming year.', 'pptx', 'https://i.imgur.com/YfJQV5z.png?id=179', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('ee2810c7-02aa-4cec-bc54-7e9db2661c13', 633, '2023-10-08T23:59:12.013Z', 'ea3f5648-5ea1-42e7-a424-645c28ac66cb');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('ab4beaf5-1a07-437a-af10-9ba9e86d9542', 532, '2023-07-16T19:51:25.483Z', '1b5a1f98-817d-4974-8509-d3d36dd3d3e0');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('e7b127b7-f3a1-4251-b67d-612217207aad', 180, '2024-02-09T14:14:16.699Z', 'ea3f5648-5ea1-42e7-a424-645c28ac66cb');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('0969c949-0135-4816-a321-4ad813485a03', 694, '2023-06-01T11:31:34.467Z', '0409dca6-d739-4dbf-b560-5d04e8055826');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('37be5735-2c42-47fc-91cc-ecbf07508236', 29, '2023-07-07T02:35:44.091Z', '1b5a1f98-817d-4974-8509-d3d36dd3d3e0');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('1d8ce7b2-be42-4a83-a7c1-6b8797fd8d90', 835, '2024-10-08T08:37:00.329Z', '0409dca6-d739-4dbf-b560-5d04e8055826');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('04b94ffb-0c6f-4676-bbc4-fc04a262bd61', 255, '2024-08-01T03:57:38.709Z', '4c53506d-4301-4a66-af44-a34109adb66e');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('c2911bf8-a442-43ad-90c0-711885d67f97', 351, '2024-08-13T10:02:18.044Z', '0409dca6-d739-4dbf-b560-5d04e8055826');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('63cc6f23-0a92-4639-9d2d-e59bdaa6a8f4', 940, '2023-08-11T13:57:48.548Z', '58018e85-b0c1-4444-a2dc-3f61bdc492e0');
INSERT INTO "version" ("id", "versionNumber", "updateDate", "documentId") VALUES ('b3bf4200-1a19-4448-a64a-8222fe0cf288', 254, '2023-04-26T08:47:14.680Z', '49dcf242-33a3-42ff-b886-14335b2cd32d');

INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('72ced06c-00b6-4e68-9e00-1806379e62bf', 'financial analysis', '4c53506d-4301-4a66-af44-a34109adb66e');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('fc3e2a09-113a-4286-a9a2-2147f328a769', 'innovation', '376cbeb1-40ae-4448-a3cd-376f7b97577e');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('c4e8c5dc-6871-44e6-bd8e-7c00c3ea7319', 'software development', '9b7ad36f-e104-4ab3-90ac-36af7d82734e');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('f7a34d2b-e27d-4ab2-a780-61492d19d31f', 'project management', 'ea3f5648-5ea1-42e7-a424-645c28ac66cb');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('6261e7d6-ea56-40cb-ae7f-17f8a18a837b', 'environmental policy', 'ff3f4994-e03a-44b1-9952-ce0ee8094214');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('d0bc3a2d-6e84-484c-90d8-8c59de72f06e', 'innovation', '0409dca6-d739-4dbf-b560-5d04e8055826');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('92de68e3-bad5-40ee-8edc-1273524ef855', 'environmental policy', '9b7ad36f-e104-4ab3-90ac-36af7d82734e');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('0d7f48b6-3449-4c9f-b0bb-e4a13895134f', 'software development', '1b5a1f98-817d-4974-8509-d3d36dd3d3e0');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('efa82c2e-6efe-4ae1-9df8-a35b15dc1203', 'project management', '4c53506d-4301-4a66-af44-a34109adb66e');
INSERT INTO "metadata" ("id", "keyword", "documentId") VALUES ('ea7ebad0-e472-4e6a-9325-485ea9533295', 'innovation', '0409dca6-d739-4dbf-b560-5d04e8055826');

INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('7f4ce264-8259-470e-9e08-e686b5e5995a', 'fullcontrol', '05e97672-2e28-4631-9b72-b40762be9765', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('b30e733e-7b67-4905-a932-8ba7efba65fa', 'readonly', '4c53506d-4301-4a66-af44-a34109adb66e', '9856ecc6-2bd7-47fa-ac45-78857022b87d');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('31ad0b9e-024c-4b65-ae14-c758f088bdb3', 'fullcontrol', '05e97672-2e28-4631-9b72-b40762be9765', '47bf39ce-99e9-4df4-9600-1c264e5cd6ad');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('b3979c5e-7dd1-44aa-8937-8e29df2da673', 'edit', '9b7ad36f-e104-4ab3-90ac-36af7d82734e', '85019e9f-1028-41ea-8a5b-c99163f4f5b0');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('8104e450-9c65-4ff3-ada0-65acffe5d064', 'delete', '05e97672-2e28-4631-9b72-b40762be9765', '85019e9f-1028-41ea-8a5b-c99163f4f5b0');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('052e642f-ee57-4845-84ec-13a1507f0c07', 'readonly', 'ea3f5648-5ea1-42e7-a424-645c28ac66cb', 'd8f7bd05-d193-4fb5-8351-078fd7133e58');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('f4cb28bb-05c9-464f-9c55-85b07dc823c4', 'edit', '1b5a1f98-817d-4974-8509-d3d36dd3d3e0', '9856ecc6-2bd7-47fa-ac45-78857022b87d');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('28f5423d-1105-402b-bc5c-0b3493b26ed1', 'edit', 'ff3f4994-e03a-44b1-9952-ce0ee8094214', '9fdde556-9698-417c-a167-abd9c33e1d9f');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('94d318df-19e3-41ed-910b-67f2a6eb6c2f', 'readonly', '05e97672-2e28-4631-9b72-b40762be9765', 'af100895-c0bc-432c-91d2-901bdc895b81');
INSERT INTO "permission" ("id", "accessLevel", "documentId", "userId") VALUES ('00635ae7-22f6-4e45-b36c-5b7fca3b2d05', 'delete', '49dcf242-33a3-42ff-b886-14335b2cd32d', 'af100895-c0bc-432c-91d2-901bdc895b81');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
