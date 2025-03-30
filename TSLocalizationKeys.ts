import { TSLocalizations_de } from "./de/TSLocalizations_de";
import { TSLocalizations_bg } from "./bg/TSLocalizations_bg";
import { TSLocalizations_en } from "./en/TSLocalizations_en";
import { TSLocalizations_es_es } from "./es-es/TSLocalizations_es-es";
import { TSLocalizations_fr } from "./fr/TSLocalizations_fr";
import { TSLocalizations_pt_br } from "./pt-br/TSLocalizations_pt-br";
import { TSLocalizations_ru } from "./ru/TSLocalizations_ru";
import { TSLocalizations_tr } from "./tr/TSLocalizations_tr";
import { TSLocalizations_hi } from "./hi/TSLocalizations_hi";
import { TSLocalizations_ja } from "./ja/TSLocalizations_ja";
import { TSLocalizations_zh_cn } from "./zh-cn/TSLocalizations_zh_cn";
import { TSLocalizations_it } from "./it/TSLocalizations_it";
import { TSLocalizations_pl } from "./pl/TSLocalizations_pl";

export interface TSLocalizationKeys {
    task: {
        deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string;
        assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string;
        assigned_embed_title(id: string): string;
        assigned_embed_footer: string;
        assigned_embed_button_in_progress: string;
        assigned_embed_button_done: string;
        deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string;
        repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string;
        repeat_notification_embed_title(id: string): string;
        deadline_alert: string;
        commented_notification(guildName: string, guildId: string, author: string, commentText: string): string;
        commented_embed_title(id: string): string;
        comment_response_button: string;
        stop_followup_reminder_button: string;
        extend_deadline_by_one_day_button: string;
        extend_deadline_by_two_days_button: string;
        extend_deadline_by_one_week_button: string;
        watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string;
        watcher_notification_footer: string;
        watcher_embed_title(id: string): string;
        milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string;
        status_todo: string;
        status_in_progress: string;
        status_done: string;
    },
    webhookLogging: {
        id_field: string,
        deadline_field: string,
        assignees_field: string,
        status_field: string,
        todos_field: string,
        status_field_value(status: number): string,
        delete_at_field: string,
        text_field: string,
        project_field: string,
        topic_field: string,
        permission_field: string,
        role_field: string,
        user_field: string,
        preset_field: string,
        priority_field: string,
        label_field: string,
        personal_field: string,
        manager_field: string,
        repeat_interval_field: string,
        repeat_end_date_field: string,
        milestone_field: string,
        due_date_field: string,
        deadline_due: {
            title(id: string): string,
            description(id: string, deadline: string): string,
        },
        task_deleted: {
            title(id: string): string,
            description(id: string): string,
        },
        repeat_set: {
            title(id: string): string,
            description(id: string): string,
        },
        task_created: {
            title(id: string): string,
            description(id: string, task_text: string): string,
        },
        task_updated: {
            title(id: string): string,
            description(id: string): string,
        },
        project_created: {
            title: string,
            description(projectName: string): string,
        },
        project_deleted: {
            title: string,
            description(projectName: string): string,
        },
        task_status_changed: {
            title(id: string): string,
        },
        permission_granted: {
            title: string,
        }
        permission_revoked: {
            title: string,
        },
        preset_applied: {
            title: string,
        },
        deadline_was_in_past: {
            title(id: string): string,
        },
        project_updated: {
            title: string,
            description(name: string): string,
        },
        test_message: {
            title: string,
            description: string,
        },
        comment_added: {
            title(id: string): string,
        },
        comment_deleted: {
            title(id: string): string,
        },
        topic_created: {
            title: string,
            description(name: string): string,
        },
        topic_updated: {
            title: string,
            description(name: string): string,
        },
        topic_deleted: {
            title: string,
            description(name: string): string,
        },
        document_created: {
            title(id: string): string,
            description(name: string): string,
        },
        document_updated: {
            title(id: string): string,
            description(name: string): string,
        },
        document_deleted: {
            title(id: string): string,
            description(name: string): string,
        },
        label_created: {
            title: string,
            description(name: string): string,
        },
        label_updated: {
            title: string,
            description(name: string): string,
        },
        label_deleted: {
            title: string,
            description(name: string): string,
        },
        attachments_field: string,
        milestone_created: {
            title: string,
        },
        milestone_updated: {
            title: string,
        },
        milestone_deleted: {
            title: string,
        },
    },
    event: {
        reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string;
        invite_notification: {
            content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string,
            accept_button: string,
            deny_button: string,
        },
        edit_notification: {
            content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string,
        }
    },
    pro_granted_notification(guildId: string, guildName: string): string,
    payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string,
    files:{
        file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string,
        folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string,
    },
    self_data_download_ready: string,
}

export class Localizations {

    static Localizations: {
        [key: string]: TSLocalizationKeys
    } = {
        "bg": TSLocalizations_bg.Localizations,
        "de": TSLocalizations_de.Localizations,
        "en": TSLocalizations_en.Localizations,
        "es-es": TSLocalizations_es_es.Localizations,
        "fr": TSLocalizations_fr.Localizations,
        "hi": TSLocalizations_hi.Localizations,
        "pt-br": TSLocalizations_pt_br.Localizations,
        "ru": TSLocalizations_ru.Localizations,
        "tr": TSLocalizations_tr.Localizations,
        "ja": TSLocalizations_ja.Localizations,
        "pl": TSLocalizations_pl.Localizations,
        "zh-cn": TSLocalizations_zh_cn.Localizations,
        "it": TSLocalizations_it.Localizations,
    }
}
