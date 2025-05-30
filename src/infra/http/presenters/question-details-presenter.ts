import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { AttachmentPresenter } from './attachment-presenter'

export class QuestionDetailsPresenter {
  static toHTTP(questionDetails: QuestionDetails) {
    return {
      questionId: questionDetails.questionId,
      authorId: questionDetails.authorId,
      title: questionDetails.title,
      content: questionDetails.content,
      authorName: questionDetails.authorName,
      slug: questionDetails.slug,
      attachments: questionDetails.attachments.map((attachment) => {
        return AttachmentPresenter.toHTTP(attachment)
      }),
      createdAt: questionDetails.createdAt,
      updatedAt: questionDetails.updatedAt,
    }
  }
}
