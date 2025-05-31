import { OnAnswerCreated } from '@/domain/notification/application/subcribers/on-answer-created'
import { OnQuestionBestAnswersChosen } from '@/domain/notification/application/subcribers/on-question-best-answer-chosen'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { DatabaseModule } from '@faker-js/faker/.'
import { Module } from '@nestjs/common'

@Module({
  imports: [DatabaseModule],
  providers: [
    OnAnswerCreated,
    OnQuestionBestAnswersChosen,
    SendNotificationUseCase,
  ],
})
export class EventsModule {}
