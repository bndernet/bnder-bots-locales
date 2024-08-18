import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_bg {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `Краен срок за задача **${id}** е на ${deadline} в сървър [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `Вие сте назначени за задача в сървър [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Задача ${id} назначена`;
            },
            assigned_embed_footer: "Тези известия могат да бъдат деактивирани от администратор на сървъра с командата \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Отбележи като в процес",
            assigned_embed_button_done: "Отбележи като завършена",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Краен срок за задача ${id} е изтекъл в сървър [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `Задача, за която сте назначени, беше повторена и трябва да бъде изпълнена в сървър [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Задача ${id} повторена`;
            },
            deadline_alert: "Краен срок на задача",
            commented_embed_title(id: string): string {
                return `Добавен коментар към задача ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Коментар беше добавен към задача в сървър [${guildName}](https://discord.com/channels/${guildId}) от ${author}: ${commentText}`;
            },
            comment_response_button: "Отговори на коментар",
            stop_followup_reminder_button: "Спри напомнянето за последване",
            extend_deadline_by_one_day_button: "Удължаване на срока с 1 ден",
            extend_deadline_by_two_days_button: "Удължаване на срока с 2 дни",
            extend_deadline_by_one_week_button: "Удължаване на срока с 1 седмица",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Краен срок",
            assignees_field: "Назначени",
            status_field: "Статус",
            subtasks_field: "Подзадачи",
            delete_at_field: "Изтриване на",
            project_field: "Проект",
            topic_field: "Тема",
            text_field: "Текст",
            user_field: "Потребител",
            role_field: "Роля",
            permission_field: "Право",
            preset_field: "Предварителна настройка",
            priority_field: "Приоритет",
            label_field: "Етикет",
            personal_field: "Лично",
            manager_field: "Мениджър",
            repeat_interval_field: "Интервал на повторение в дни",
            repeat_end_date_field: "Край на повторението",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "In Progress";
                    case 2:
                        return "Done";
                    default:
                        return "Unknown";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Краен срок на задача ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Краен срок за задача **${id}** е на ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Задача ${id} изтрита.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше изтрита от кошчето.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Задача ${id} повторена.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше повторена и статусът беше зададен на todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Задача ${id} създадена.`;
                },
                description(task_text: string, id: string): string {
                    return `Задача ${id} беше създадена с текст: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Задача ${id} актуализирана.`;
                },
                description(id: string): string {
                    return `Задача ${id} беше актуализирана и бяха променени следните данни.`;
                }
            },
            project_created: {
                title: "Проект създаден",
                description(projectName: string): string {
                    return `Проект ${projectName} беше създаден`;
                }
            },
            project_deleted: {
                title: "Проект изтрит",
                description(projectName: string): string {
                    return `Проект ${projectName} беше изтрит`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Статус на задача ${id} променен`;
                }
            },
            permission_granted: {
                title: "Право предоставено",
            },
            permission_revoked: {
                title: "Право отнето",
            },
            preset_applied: {
                title: "Приложена предварителна настройка",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Краен срок за задача ${id} е изтекъл`;
                }
            },
            project_updated: {
                title: "Проект актуализиран",
                description(name: string): string {
                    return `Проект ${name} беше актуализиран`;
                }
            },
            test_message: {
                title: "Това е тестово съобщение",
                description: "Ако виждате това съобщение, уебхукът работи правилно и логването е активирано."
            },
            comment_added: {
                title(id: string): string {
                    return `Коментар към задача ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Коментар към задача ${id} изтрит`;
                }
            },
            topic_created: {
                title: "Тема създадена",
                description(topicName: string): string {
                    return `Тема ${topicName} беше създадена`;
                }
            },
            topic_updated: {
                title: "Тема актуализирана",
                description(topicName: string): string {
                    return `Тема ${topicName} беше актуализирана`;
                }
            },
            topic_deleted: {
                title: "Тема изтрита",
                description(topicName: string): string {
                    return `Тема ${topicName} беше изтрита`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Документ ${id} създаден`;
                },
                description(name: string): string {
                    return `Документ ${name} беше създаден`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Документ ${id} актуализиран`;
                },
                description(name: string): string {
                    return `Документ ${name} беше актуализиран`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Документ ${id} изтрит`;
                },
                description(name: string): string {
                    return `Документ ${name} беше изтрит`;
                }
            },
            label_created: {
                title: "Етикет създаден",
                description(name: string): string {
                    return `Етикет ${name} беше създаден`;
                }
            },
            label_updated: {
                title: "Етикет актуализиран",
                description(name: string): string {
                    return `Етикет ${name} беше актуализиран`;
                }
            },
            label_deleted: {
                title: "Етикет изтрит",
                description(name: string): string {
                    return `Етикет ${name} беше изтрит`;
                }
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Предстоящо събитие (${id}: ${name}) започва след ${durationTillEventMinutes} минути в [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Покана за събитие **${eventId}** от <@${inviterId}>: ${eventName} от ${start} до ${end}`;
                },
                accept_button: "Приеми",
                deny_button: "Откажи"
            }
        }
    }
}