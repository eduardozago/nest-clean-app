import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import {
  Question as PrismaQuestion,
  User as PrismaUser,
  Attachment as PrismaAttachment,
} from '@prisma/client'
import { PrismaAttachmentsMapper } from './prisma-attachment-mapper'

type PrismaQuestionDetails = PrismaQuestion & {
  author: PrismaUser
  attachments: PrismaAttachment[]
}

export class PrismaQuestionDetailsMapper {
  static toDomain(raw: PrismaQuestionDetails): QuestionDetails {
    return QuestionDetails.create({
      questionId: new UniqueEntityID(raw.id),
      authorId: new UniqueEntityID(raw.authorId),
      title: raw.title,
      content: raw.content,
      authorName: raw.author.name,
      slug: Slug.create(raw.slug),
      attachments: raw.attachments.map((attachment) => {
        return PrismaAttachmentsMapper.toDomain(attachment)
      }),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }
}
