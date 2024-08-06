import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_en {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `The deadline for task **${id}** is due on ${deadline} in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `You have been assigned to a task in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Task ${id} assigned`;
            },
            assigned_embed_footer: "These notifications can be disabled using the \"/preferences direct_messages\" command.",
            assigned_embed_button_in_progress: "Mark as in progress",
            assigned_embed_button_done: "Mark as done",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `The deadline for task ${id} is overdue in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `A task you are assigned to has been repeated and needs to be done in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Task ${id} repeated`;
            },
            deadline_alert: "Task deadline",
            commented_embed_title(id: string): string {
                return `Comment added to task ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `A comment was added to a task in server [${guildName}](https://discord.com/channels/${guildId}) by ${author}: ${commentText}`;
            },
            comment_response_button: "Respond to comment",
            stop_followup_reminder_button: "Stop follow-up reminder",
            extend_deadline_by_one_day_button: "+1 day",
            extend_deadline_by_two_days_button: "+2 days",
            extend_deadline_by_one_week_button: "+1 week",
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Deadline",
            assignees_field: "Assignees",
            status_field: "Status",
            subtasks_field: "Subtasks",
            delete_at_field: "Delete at",
            project_field: "Project",
            text_field: "Text",
            role_field: "Role",
            permission_field: "Permission",
            user_field: "User",
            preset_field: "Preset",
            priority_field: "Priority",
            label_field: "Label",
            personal_field: "Personal",
            manager_field: "Manager",
            repeat_interval_field: "Repeat interval in days",
            repeat_end_date_field: "Repeat end date",
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
                    return `Deadline for task ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `The deadline for task **${id}** is due on ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Task ${id} deleted.`;
                },
                description(id: string): string {
                    return `Task ${id} was deleted.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Task ${id} repeated.`;
                },
                description(id: string): string {
                    return `Task ${id} was repeated and the state was set to todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Task ${id} created.`;
                },
                description(task_text: string, id: string): string {
                    return `Task ${id} was created with text: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Task ${id} updated.`;
                },
                description(id: string): string {
                    return `Task ${id} was updated and the following data was changed.`;
                }
            },
            project_created: {
                title: "Project created",
                description(projectName: string): string {
                    return `Project ${projectName} was created`;
                }
            },
            project_deleted: {
                title: "Project deleted",
                description(projectName: string): string {
                    return `Project ${projectName} was deleted`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Task ${id} status changed`;
                }
            },
            permission_granted: {
                title: "Permission granted",
            },
            permission_revoked: {
                title: "Permission revoked",
            },
            preset_applied: {
                title: "Preset applied",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Deadline for task ${id} is overdue`;
                }
            },
            project_updated: {
                title: "Project updated",
                description(name: string): string {
                    return `Project ${name} was updated`;
                }
            },
            test_message: {
                title: "This is a test message",
                description: "If you see this message, the webhook is working correctly and the logging is enabled."
            },
            comment_added: {
                title(id: string): string {
                    return `Comment added to task ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Comment deleted from task ${id}`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Upcoming event (${id}) **${name}** is starting in ${durationTillEventMinutes} minutes at ${startTime} in [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `You have been invited to event ${eventId} by <@${inviterId}>: **${eventName}** starting at ${start} and ending at ${end}`;
                },
                accept_button: "Accept",
                deny_button: "Deny"
            }
        }
    }
}