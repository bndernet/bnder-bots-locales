import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_en {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `The deadline for task **${id}** ${taskTitle} is due on ${deadline} in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `You have been assigned to task **${id}** ${taskText} in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Task ${id} assigned`;
            },
            assigned_embed_footer: "These notifications can be disabled using the \"/preferences direct_messages\" command.",
            assigned_embed_button_in_progress: "Mark as in progress",
            assigned_embed_button_done: "Mark as done",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `The deadline for task **${id}** ${taskTitle} is overdue in server [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `The task **${id}** ${taskTitle} you are assigned to has been repeated and needs to be done again in server [${guildName}](https://discord.com/channels/${guildId})`;
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
            extend_deadline_by_one_day_button: "Extend deadline by 1 day",
            extend_deadline_by_two_days_button: "Extend deadline by 2 days",
            extend_deadline_by_one_week_button: "Extend deadline by 1 week",
            watcher_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `You have been added as a watcher to task **${id}** ${taskText} in server [${guildName}](https://discord.com/channels/${guildId}) by <@${addedBy}>. You will receive notifications when something changes in this task. If you want to stop receiving notifications, you can click the button below.`;
            },
            watcher_added_notification_unsubscribe_button: "Unsubscribe",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `The task **${id}** ${taskTitle} you are watching in server [${guildName}](https://discord.com/channels/${guildId}) changed:`
            },
            watcher_notification_footer: "Disable notifications for this task by using \"/task unwatch\" command",
            watcher_embed_title(id: string): string {
                return `Task ${id} updated`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `The milestone **${milestoneName}** is due in less than 6 hours in server [${guildName}](https://discord.com/channels/${guildId}) and has tasks that need to be completed.`;
            },
            status_todo: "Todo",
            status_in_progress: "In Progress",
            status_done: "Done"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Deadline",
            assignees_field: "Assignees",
            status_field: "Status",
            todos_field: "Todos",
            delete_at_field: "Delete at",
            project_field: "Project",
            topic_field: "Topic",
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
            milestone_field: "Milestone",
            due_date_field: "Due date",
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
            },
            topic_created: {
                title: "Topic created",
                description(name: string): string {
                    return `Topic ${name} was created`;
                }
            },
            topic_updated: {
                title: "Topic updated",
                description(name: string): string {
                    return `Topic ${name} was updated`;
                }
            },
            topic_deleted: {
                title: "Topic deleted",
                description(name: string): string {
                    return `Topic ${name} was deleted`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Document ${id} created`;
                },
                description(name: string): string {
                    return `Document ${name} was created`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Document ${id} updated`;
                },
                description(name: string): string {
                    return `Document ${name} was updated`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Document ${id} deleted`;
                },
                description(name: string): string {
                    return `Document ${name} was deleted`;
                }
            },
            label_created: {
                title: "Label created",
                description(name: string): string {
                    return `Label ${name} was created`;
                }
            },
            label_updated: {
                title: "Label updated",
                description(name: string): string {
                    return `Label ${name} was updated`;
                }
            },
            label_deleted: {
                title: "Label deleted",
                description(name: string): string {
                    return `Label ${name} was deleted`;
                }
            },
            attachments_field: "Attachments",
            milestone_created: {
                title: "Milestone created",
            },
            milestone_updated: {
                title: "Milestone updated",
            },
            milestone_deleted: {
                title: "Milestone deleted",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `Upcoming event (${id}) **${name}** is starting in ${durationTillEventMinutes} minutes at ${startTime} in [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `You have been invited to event ${eventId} by <@${inviterId}>: **${eventName}** starting at ${start} and ending at ${end}.\n-# All dates are calculated in ${timezone}. Use \"/settings timezone\" to change the timezone for the whole server, or \"/preferences timezone\" to change your own.`;
                },
                accept_button: "Accept",
                deny_button: "Deny"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> updated the event ${eventId}: **${eventName}** starting at ${start} and ending at ${end}.\n-# All dates are calculated in ${timezone}. Use \"/settings timezone\" to change the timezone for the whole server, or \"/preferences timezone\" to change your own.`
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Congratulations! You have been placed in a pro seat in server [${guildName}](<https://discord.com/channels/${guildId}>). This means you now have access to [pro features](<https://bnder.net/pricing>). Enjoy!`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Action Needed: Payment Failed for Pro Subscription\nWe couldn’t process the payment for one or more Pro seats on [${guildName}](<https://discord.com/channels/${guildId}>). To avoid losing access to Pro features, please [update your payment info and pay your invoice now](<${customerPortalLink}>).\n\nYour Pro features will be disabled soon if no action is taken.\n\nNeed help? [Contact support](https://bnder.net/discord) — we’re here for you.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `The file **${fileName}** was shared with you in server [${guildName}](https://discord.com/channels/${guildId}) by <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `The folder **${folderName}** was shared with you in server [${guildName}](https://discord.com/channels/${guildId}) by <@${userId}>`;
            }
        },
        self_data_download_ready: "Your data is ready for download. You can download it in [our app](<https://bnder.net/app/>). The download link is available for two weeks.",
        tutorial_tasks: {
            tutorial_label_name: "Tutorial",
            create_first_task_title: "Create your first task",
            create_first_task_description: "Start by creating a task. Give it a name and optionally a description.",
            change_task_status_title: "Change task status",
            change_task_status_description: "Change the status of a task to 'In Progress' or 'Done' by dragging it to the respective column.",
            invite_team_members_title: "Invite your team members",
            invite_team_members_description: "Invite your team members to join your workspace. They will see the invitation in their user settings.",
            explore_workspace_title: "Explore the workspace",
            explore_workspace_description: "Explore the workspace and familiarize yourself with the features. You can create tasks, manage members, and more. You may also take a look into the settings to adjust the date format, language, and timezone."
        },
        mails: {
            footer: {
                company_limited_liability: "limited liability company (UG)",
                company_address: "Im Flath 12 - 38542 Leiferde - Germany",
                company_register_court: "District Court of Hildesheim (Germany) - HRB 209373",
                company_ceo: "CEO: Jan Brinkmann",
                company_contact: "Mail: contact@bnder.net - Phone: +49 511 45032009",
                legal_automated_email: "This is an automated email. Please do not reply to this email.",
                legal_privacy_policy_prefix: "Please read our privacy policy at",
                legal_imprint: "Imprint",
                legal_terms_of_use: "Terms of Use",
                legal_privacy_policy: "Privacy Policy",
            },
            verify_email: {
                headline: "Verify your email address",
                text: "Please confirm your email address by clicking the link below.",
                primaryActionText: "Verify Email",
            },
            password_changed: {
                headline: "Password Changed",
                text: "Your password has been successfully changed. If you did not initiate this change, please contact support immediately at contact@bnder.net",
            },
            reset_password: {
                headline: "Reset your password",
                text: "To reset your password, please click the button below. If you did not request a password reset, please ignore this email.",
                primaryActionText: "Reset Password",
            },
            workspace_invitation: {
                headline: "Workspace Invitation",
                text(workspaceName: string): string {
                    return `You have been invited to join the workspace ${workspaceName}. Click the button below to accept the invitation and join the workspace.`;
                },
                primaryActionText: "Join Workspace",
            },
            task_assigned: {
                subject: "You have been assigned a new task",
                greeting(guildName: string): string {
                  return `You have been assigned to a task in workspace ${guildName}.`;
                },
                no_deadline: "No deadline set for this task.",
                open_in_app: "Open in App",
            },
            primaryPasteActionLinkText: "Or paste the link below into your browser:",
            task_watcher: {
                added_subject: "You have been added as a watcher to a task",
                watcher_added(guildName: string): string {
                    return `You have been added as a watcher to a task in workspace ${guildName}. You will receive notifications when something changes in this task.`;
                },
                subject: "Task update notification",
                activity(guildName: string): string {
                    return `A task you are watching in workspace ${guildName} has changed.`;
                }
            },
            self_data_download_ready: {
                headline: "Your data is ready for download",
                text: "We've prepared your data for download. You can access it in the app. The download link is available for two weeks.",
            },
            open_app: "Open App",
        }
    }
}